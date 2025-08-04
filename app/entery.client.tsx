// app/root.tsx or wherever you're mounting React

import { Provider } from "react-redux";
import { store } from "./Redux/store"; // Ensure this path is correct
import { Outlet } from "@remix-run/react";

export default function App() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
}
