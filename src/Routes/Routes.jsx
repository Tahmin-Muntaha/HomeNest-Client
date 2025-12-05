import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import All from "../Components/All";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
  
  children:[
    {
        index:true,
        Component:Home
    },
    {
      path:'/all',
      Component:All
    },{
      path:'/signup',
      Component:SignUp
    },
    {
      path:'/login',
      Component:LogIn
    }
  ]
}
  
]);
