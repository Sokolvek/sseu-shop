import * as ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
import { Home } from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Cart from "./pages/Cart/Cart";
let router = null;

export default router = createBrowserRouter([
    {
        path:"/",
        Component:Home
    },
    {
        path:"/home",
        element:<div>Hello react</div>
    },
    {
        path:"/catalog",
        Component:Catalog    
    },
    {
        path:"/cart",
        Component:Cart
    }
])  