import React, { Fragment } from 'react'
import { productData } from '../../api/productData'
import ShoppingCartCard from './ShoppingCartCard'
import ShoppingCartTitle from './ShoppingCartTitle'

const ShoppingCart = (props) => {
    return (
        <Fragment>
            <ShoppingCartTitle />
            {productData.map(product => (
                <ShoppingCartCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                />
            ))}
        </Fragment>
    )
}

export default ShoppingCart