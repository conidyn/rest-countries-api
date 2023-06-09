import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './routes/Home';
import { CountryDetails } from './routes/CountryDetails';
import {Layout} from './components/layout/Layout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Layout>
        <Home />
      </Layout>,
  },
  {
    path: "country/:numericCode",
    element: 
      <Layout>
        <CountryDetails />
      </Layout>,
  },
]);
console.log(document.querySelector("html[data-theme]"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
