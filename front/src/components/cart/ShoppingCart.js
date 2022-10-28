import React, { Fragment } from 'react'
import { productData } from '../../api/productData'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import ShoppingCartCard from './ShoppingCartCard'
import ShoppingCartTitle from './ShoppingCartTitle'

const ShoppingCart = (props) => {
    return (
        <Fragment>
            <Header />
            <ShoppingCartTitle />
            {productData.map(product => (
                <ShoppingCartCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                />
            ))}
            <Footer />
        </Fragment>
    )
}

export default ShoppingCart