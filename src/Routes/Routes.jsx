import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import All from "../Components/All";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import SeeDetails from "../Components/SeeDetails";
import PrivateRouter from '../Routes/PrivateRouter'
import MyRatings from "../Components/MyRatings";
import Post from "../Components/Post";
import MyProperty from "../Components/MyProperty";
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
    },
    {
      path:'/details/:id',
      element:<PrivateRouter>
        <SeeDetails></SeeDetails>
      </PrivateRouter>
    },
    {
      path:'/reviews/:email',
      element:<PrivateRouter>
        <MyRatings></MyRatings>
      </PrivateRouter>
    },
    {
      path:'/post',
      element:<PrivateRouter>
        <Post></Post>
      </PrivateRouter>
    },
    {
      path:'/myproperty/:email',
      element:<PrivateRouter>
        <MyProperty></MyProperty>
      </PrivateRouter>
    }

  ]
}
  
]);
