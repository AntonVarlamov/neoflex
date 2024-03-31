import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";
import { Cart } from "../pages/cart";

export default function router() {
  return createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
}
