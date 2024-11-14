import { useState } from 'react'
import Home from './Components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './Components/Product/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
