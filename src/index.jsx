import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { App } from "./components/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => redirect("/romannumeral"),
  },
  {
    path: "/romannumeral",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
