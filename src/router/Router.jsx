import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../shared/Login/Login";
import SignIn from "../shared/SignIn/SignIn";
import MyColleges from "../pages/MyColleges/MyColleges";
import College from "../pages/College/College";
import Admission from "../pages/Admissions/Admission";
 
 
 
 
 
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"College",
        element: <College />
      },
      {
        path:"admission",
        element: <Admission />
      },
      {
        path:"mycollege",
        element: <MyColleges />
      },
      
       
      {
        path:"login",
        element:<Login />
      },
       
      {
        path:"signin",
        element:<SignIn />
      },
    ],
    
  },
   
   
])