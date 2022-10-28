import React from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import ViewProducts from '../components/products/ViewProducts'
import '../styles/pages/Login.css'

export const Login = () => {
  
  let login = true
  
  return (
    <div className='Login'>
      <Header />
      <div>
        {login ? ( 
        <ViewProducts /> 
        ):(
        login = false)}
      </div>
      <Footer />
    </div>  

  )
}
