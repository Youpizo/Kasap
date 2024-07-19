import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from "../src/assets/pages/Erreur";
import HomePage from "./assets/pages/HomePage";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
    errorElement:
      <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


