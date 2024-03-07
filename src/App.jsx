import React from 'react';
import './App.css';
import { TEXT } from './globals/constants/constants';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage, NotFoundPage} from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: `*`,
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>{TEXT.loading + '...'}</p>} />;
}