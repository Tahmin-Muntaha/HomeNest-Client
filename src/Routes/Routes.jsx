import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../pages/Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
  
  children:[
    {
        index:true,
        Component:Home
    }
  ]
}
  
]);
