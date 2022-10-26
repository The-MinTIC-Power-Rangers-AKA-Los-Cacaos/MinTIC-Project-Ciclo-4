import React, { Fragment } from 'react'
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa'
import '../../styles/layout/CardProducts.css'

const CardProducts = (props) => {
  return (
    <Fragment>
      <div key={props.id} className='tarjetaProduct' >
        <div className='card'>
          <img src={props.image}></img>
        </div>
        <hr className='hr' />
        <div key={props.id}>
          <h3 className='productName'>{props.name}</h3>
        </div>
        <div className='priceProduct'>${props.price}</div>
        <div className='butonAgregar'><button>Agregar</button></div>


      </div>
    </Fragment>

  )
}

export default CardProducts