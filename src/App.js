// App.js

import React from 'react';
import Login from './LoginFiles/Login';
import Signup from './LoginFiles/Signup';
import  Dashboard  from '../src/component/Dashboard';
import DashboardData from './component/DashboardData';
import UsersCom from './component/UsersCom';
import ProductsCom from './component/ProductsCom';


import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    
  },
  {
    path: "/signup",
    element: <Signup />,
   
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "/dashboard/",
        element: <DashboardData />
      },
      {
        path :"/dashboard/orders/",
        element:<ProductsCom/>
      },
      {
        path :"/dashboard/customer/",
        element:<UsersCom/>
      },
      {
        path :"/dashboard/reports/",
        element:<DashboardData/>
      }
     
      
      
    ]
    
  }

]);
const App = () => {
  return <RouterProvider router={router} ></RouterProvider>;
};

export default App;
