import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PaginaPais } from "./PaginaPais.jsx";
import { NotFound } from "./NotFound.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeSync } from "./components/ThemeSync.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/pais/:pais", element: <PaginaPais /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeSync />
    <RouterProvider router={router} />
  </StrictMode>,
);
