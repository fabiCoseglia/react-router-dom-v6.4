import React from 'react'
import ReactDOM from 'react-dom/client'


import {RouterProvider } from 'react-router-dom';
import { router } from './router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/*  Reemplazar el app por el provider de reactRouterDOM */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
