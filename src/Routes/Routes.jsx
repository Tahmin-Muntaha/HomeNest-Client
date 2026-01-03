import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import All from "../Components/All";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import SeeDetails from "../Components/SeeDetails";
import PrivateRouter from "../Routes/PrivateRouter";
import MyRatings from "../Components/MyRatings";
import Post from "../Components/Post";
import MyProperty from "../Components/MyProperty";
import Update from "../Components/update";
import Error from "../Components/Error";
import About from "../Components/About";
import Term from "../Components/Term";
import DashBoard from "../Components/DashBoard";
import DashboardMain from "../Components/DashboardMain";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    Component: Root,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all",
        Component: All,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/details/:id",
        element: (
          
            <SeeDetails></SeeDetails>
        ),
      },
      
      
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://homenest-eight.vercel.app/properties/${params.id}`),
        element: (
          <PrivateRouter>
            <Update></Update>
          </PrivateRouter>
        ),
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/term',
        element:<Term></Term>
      },
      {
        path: "/post",
        element: (
         <PrivateRouter> <Post></Post></PrivateRouter>
           
         
        ),
      },
      {
        path:'/dash',
        element:<PrivateRouter>
          <DashBoard></DashBoard>
        </PrivateRouter>,
        children:[
          {
            index:true,
            element:<DashboardMain></DashboardMain>

          },
          
      {
        path: "/dash/reviews/:email",
        element: (
         
            <MyRatings></MyRatings>
          
        ),
      },
      {
        path: "/dash/myproperty/:email",
        element: (
          
            <MyProperty></MyProperty>
          
        ),
      },
      
          
        ]

      }
    ],
  },
]);
