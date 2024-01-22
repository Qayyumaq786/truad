// App.js

import React from 'react';
import Login from './LoginFiles/Login';
import Signup from './LoginFiles/Signup';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    
  },
  {
    path: "/signup",
    element: <Signup />,
   
  }
  
]);
const App = () => {
  return <RouterProvider router={router}  ></RouterProvider>;
};

export default App;
