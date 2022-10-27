import React, { Fragment } from 'react'
import { productData } from "../../api/productData";
import "../../styles/layout/ShoppingCart.css"

const ShoppingCartCard = (props) => {
    return (
        <Fragment>
            <div key={props.id} class="product-card">
                <img class="product-img card-element" src={props.image} />
                <hr className='lines card-element' />
                <div class="name card-element">
                    <p>{props.name}</p>
                </div>
                <hr class='lines card-element' />
                <div class="quantity card-element">
                    <img class="arrow-left" src="../../img/arrow.png" />
                    <input class="number" readOnly placeholder='1' />
                    <img class="" src="../../img/arrow.png" />
                </div>
                <hr className='lines card-element' />
                <a href="#" class="card-trashcan card-element"><div>
                    <img src="../../img/trashcan.png" />
                </div></a>
            </div>
        </Fragment>
    )
}

export default ShoppingCartCard