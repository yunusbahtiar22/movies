import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

import React from "react";

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
