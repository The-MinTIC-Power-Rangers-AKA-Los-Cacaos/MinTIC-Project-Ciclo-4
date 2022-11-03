import React from 'react';
import { productData } from '../../api/productData';
import { useParams, Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../../styles/components/products/ProductDetail.css'
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { clearErrors } from '../../actions/productActions';
import { getProductDetails } from '../../actions/productActions';



export const ProductDetail = () => {
    {/*const {loading, product, error} = useSelector(state =>state.productDetails)*/}
    const {loading, product, error} = useSelector(state =>state.productDetails)
    const {id} =useParams();
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(id))
        if (error){
            dispatch(clearErrors())
        }
    
       }, [dispatch, error, id])

       return (
           <>
               
               <Header />

               <div className='containerCardMain' >
                   <div key={product.id} className='cardLeft' >
                       {/*<div className='imageContainer'>
                           <img className='imgContainer' src={product.image} alt="img"></img>
                        </div>*/}
                        

                       <div className='cardRigth' >
                           <div className='rigthOne'>
                               <div className='nameProduct'>
                                   <h1 className='titlteMain'>{product.name}</h1>
                               </div>                         
                               <div className='nameproductType'>
                                   <h2>{product.description}</h2>
                               </div>
                               <div className='priceProductMain'>
                                   <h3 className='hprice'>${product.price}</h3>
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
