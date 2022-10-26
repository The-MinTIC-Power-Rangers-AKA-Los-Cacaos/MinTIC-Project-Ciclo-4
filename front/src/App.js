import './App.css';
import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { HomeProducts } from './components/layout/Home';
import NewProducts from './components/layout/NewProducts';
import ViewProducts from './components/layout/ViewProducts';


function App() {
  return (
    <div className="App">
      <Header/>
      <HomeProducts/>
      <Footer/>
    </div>
  );
}

export default App;
