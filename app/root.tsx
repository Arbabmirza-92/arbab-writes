import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Provider } from "react-redux";
import {store} from "./Redux/store"; // ← your Redux store
import "~/tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "Cooperate Talks | Business Insights by Arbab" },
{ name: "description", content: "Business articles and insights by Arbab Irfan on Cooperate Talks." },
];

export const links: LinksFunction = () => [
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-gray-800 font-sans">
        <Provider store={store}>
          <Navbar />
          <Outlet />
          <ScrollRestoration />
          <Footer />
          <Scripts />
          <LiveReload />
        </Provider>
      </body>
    </html>
  );
}
