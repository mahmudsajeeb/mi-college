import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider,
} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

 

import './index.css'
import { router } from './router/Router';
import AuthProvider from './provider/AuthProvider';
 
 
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
 
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  
 
  
 
     
  
  </React.StrictMode>,
)
