import React, { Fragment } from 'react'
import { productData } from '../../api/productData'
import "../../styles/layout/ShoppingCart.css"

const ShoppingCartTitle = () => {
    const sum =  productData.reduce((a,v) =>  a = a + v.price , 0 )
    return (
        <Fragment>
            <div class="title-n-trashcan">
                <div class="title">
                    <img class="cart-icon" src="../../img/carrito.png" />
                    <p>Carrito de Compras</p>
                </div>
                <a href="#" class="trashcan"><div>
                    <img src="../../img/trashcan.png" />
                </div></a>
            </div>

            <div class="total-box">
                <div class="total">
                    <p class="total-title">Total a<span> Pagar</span></p>
                    <p class="total-number">${sum}</p>
                </div>
                <a class="pay-btn" href='#'><div>Pagar</div></a>
            </div>
        </Fragment>
    )
}

export default ShoppingCartTitle