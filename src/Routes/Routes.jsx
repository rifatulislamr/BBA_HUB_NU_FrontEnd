import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Course from "../pages/Course/Course/Course";
import Service from "../pages/Service/Service/Service";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/UserHome/Admin/AllUsers";



  export const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'course',
          element: <Course></Course>
        },
        {
          path: 'service',
          element: <Service></Service>

        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }

      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);