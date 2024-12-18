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
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Journal from './Components/Journal/Journal';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import MyAccount from './Components/MyAccount/MyAccount';
import Cart from './Components/Cart/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Home/>} >
    <Route path="/shop"  element={<Shop/>} />
    <Route path="/about"  element={<About/>} />
    <Route path="/contacts"  element={<Contacts/>} />
    <Route path="/journal"  element={<Journal/>} />
    <Route path="/products"  element={<Product/>} />
    <Route path="/products/details"  element={<ProductDetails/>} />
    <Route path="/login"  element={<Login/>} />
    <Route path="/registration"  element={<Registration/>} />
    <Route path="/account"  element={<MyAccount/>} />
    <Route path="/cart"  element={<Cart/>} />
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
