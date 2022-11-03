import React, {useState, useEffect}from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../../styles/components/products/ProductLista.css'


export const ProductsList = (props) => {

    console.log(props, props.id)
  return (
    <>
      <div key={props.id} className='tarjetaProduct' >
        <div className='card' id={props.id}>
          <Link to={`/producto/${props.id}`}>
           <img src={props.image}></img>
          </Link>
        </div>
        <hr className='hr' />
        <div key={props.id}>
          <h3 className='productName'>{props.name}</h3>
        </div>
        <div className='priceProduct'>${props.price}</div>
  
          <div className='butonAgregar'><button>Agregar</button></div>
      </div> 
    </>

  )
}
