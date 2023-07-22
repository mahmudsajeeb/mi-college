import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../shared/Login/Login";
import SignIn from "../shared/SignIn/SignIn";
 
 
 
 
 
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
        element: <h1>College</h1>
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