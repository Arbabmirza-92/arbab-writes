import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { installGlobals } from "@remix-run/node";

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false, 
    },
    fs: {
      allow: ["app", "public"],
    },
  },
  build: {
    sourcemap: true,
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      external: [],
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-icons",
      "framer-motion",
      "@remix-run/react",
      "@remix-run/node",
    ],
    exclude: ["@remix-run/dev"],
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      ssr: true,
      basename: "/",
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./app/styles/variables.scss";`,
      },
    },
  },
});