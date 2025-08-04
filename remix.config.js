/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "node",
  serverDependenciesToBundle: [
    /^react.*/,
    /^framer-motion.*/,
    /^react-icons.*/,
    /^@remix-run.*/,
    /^@radix-ui.*/,
    /^@?radix-ui.*/,
    /^@stitches.*/,
    "marked"  // ← یہاں marked کو شامل کریں
  ],
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  watchPaths: ["../../packages/**/*"],
};
