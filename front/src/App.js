import './App.css';
import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { HomeProducts } from './components/layout/Home';
import NewProducts from './components/layout/NewProducts';
import ViewProducts from './components/layout/ViewProducts';
import { CategoriesHeader } from './components/layout/CategoriesHeader';
import ShoppingCart from './components/layout/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header/>
      <ShoppingCart/>
      {/* <CategoriesHeader/>
      <HomeProducts /> */}
      <Footer/>
    </div>
  );
}

export default App;
