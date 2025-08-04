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
  { title: "Remix Blog" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
];

export const links: LinksFunction = () => [
  // Add stylesheet links
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
