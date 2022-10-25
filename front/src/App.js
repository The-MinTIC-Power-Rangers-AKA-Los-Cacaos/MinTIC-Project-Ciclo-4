import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { HomeProducts } from './components/Home';




function App() {
  return (
    <div className="App">
      <Header/>
      <HomeProducts />
      <Footer/>
    </div>
  );
}

export default App;
