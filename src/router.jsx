import * as ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "./App";
import { Home } from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Cart from "./pages/Cart/Cart";
import AddProduct from "./pages/AddProduct/AddProduct";
import Login from "./pages/login/Login";
import Header from "./components/layouts/Header/Header"
import ProductPage from "./pages/product-page/ProductPage";
let router = null;

export default router = createBrowserRouter([
    {
        Component:Header,
        children:[

        ]
    },
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
    },
    {
        path:"/add-product",
        Component:AddProduct
    },
    {
        path:"/product-page/:id",
        Component:ProductPage
    },
    {
        path:"/login",
        Component:Login
    }
])  