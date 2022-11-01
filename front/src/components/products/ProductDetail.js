import React from 'react';
import { productData } from '../../api/productData';
import { useParams, Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../../styles/components/products/ProductDetail.css'

export const ProductDetail = (product) => {

   let params = useParams()
  
    let data = productData.find(e => e.id == params.id)
 
    return (
        <>
            
            <Header />
            <div className='containerCardMain' >
                <div key={data.id} className='cardLeft' >
                    <div className='imageContainer'>
                        <img className='imgContainer' src={data.image} alt="img"></img>
                    </div>
                    <div className='cardRigth' >
                        <div className='rigthOne'>
                            <div className='nameProduct'>
                                <h1 className='titlteMain'>{data.name}</h1>
                            </div>                         
                            <div className='nameproductType'>
                                <h2>{data.productType}</h2>
                            </div>
                            <div className='priceProductMain'>
                                <h3 className='hprice'>${data.price}</h3>
                            </div>
                        </div>
                        <div className='rigthTwo'>
                            <div className='containerButon'>
                                <button>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />      
        </>
        )
}
