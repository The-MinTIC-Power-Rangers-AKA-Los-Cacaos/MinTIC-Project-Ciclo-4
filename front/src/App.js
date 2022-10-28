import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import React from 'react';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { BannerHome } from './components/layout/BannerHome';
import {Login} from './pages/Login';
import { Register } from './pages/Register';
import { Products } from './components/products/Products';
import {ProductDetail} from './components/products/ProductDetail'
import ShoppingCart from './components/cart/ShoppingCart'

function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={
            <>
              <BannerHome />

              <Products />
            </>
          } />
       </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/:id' element={<ProductDetail />}/>
          <Route path='/cart' element={<ShoppingCart />} />

        <Route path='*' element={<NotFound />}/>
      </Routes>
  );
}

export default App;
