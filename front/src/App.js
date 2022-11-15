import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import React from 'react';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import {Login} from './pages/Login';
import { Register } from './pages/Register';
import { Products } from './components/products/Products';
import {ProductDetail} from './components/products/ProductDetail';
import { SalePage } from './components/shop/SalePage';
import ShoppingCart from './components/cart/ShoppingCart'
import NewProducts from './components/products/NewProducts';
import { ResetPassword } from './pages/ResetPassword';
import { ChangePassword } from './pages/ChangePassword';


function App() {
  return (

      <Routes>
        <Route path='/' element={<Home />}>
       </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/resetPassword' element={<ResetPassword />}/>
          <Route path='/changePassword' element={<ChangePassword />}/>

          
        <Route path='/producto/:id' element={
            <ProductDetail />
        }/>
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/newproduct' element={<NewProducts/>}/>
        <Route path='/saleslist' element={<SalePage/>}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/busqueda/:keyword' element={<Home/>}/>
      </Routes>
  );
}

export default App;
