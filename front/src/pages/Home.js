import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {CategoriesHeader} from '../components/layout/CategoriesHeader'


function Home() {
  return (
    <>
      <Header />
      <CategoriesHeader/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Home