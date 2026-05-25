import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import routes from './routes';
import { createBrowserRouter, RouterProvider } from 'react-router';
import CartProvider from "./CartProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(routes);

root.render(
  <CartProvider>
    <React.StrictMode>
      <RouterProvider router = {router} />
    </React.StrictMode>
  </CartProvider>
);
