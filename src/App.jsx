import { useState } from 'react'
import Home from './Components/Home/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Product from './Components/Product/Product';
import Error from './Components/Error/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Home/>} >
    <Route path="/products"  element={<Product/>} />
    <Route path="*"  element={<Error/>} />
    </Route>
  )
);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
