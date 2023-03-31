import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import { App } from './App';
import { Homepage } from './Homepage';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { ServiceOne, ServiceTwo, ServiceThree, ServiceFour } from './Services';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: "1",
            element: <ServiceOne />
          },
          {
            path: "2",
            element: <ServiceTwo />
          },
          {
            path: "3",
            element: <ServiceThree />
          },
          {
            path: "4",
            element: <ServiceFour />
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
