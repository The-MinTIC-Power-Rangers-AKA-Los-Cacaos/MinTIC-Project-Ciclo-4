import React from "react";
import { Routes, Route} from 'react-router-dom'
import { productData } from "../../api/productData";
import '../../styles/pages/Home.css';
import {ProductsList} from "./ProductsList";
import {useDispatch} from 'react-redux'
import { getProducts } from '../../actions/productActions'
import { useEffect } from "react";
import { useSelector } from "react-redux";


export function Products() {
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(getProducts());
}, [dispatch])

const {loading, products, error}=useSelector(state=>state.products)

console.log(products)
  return (
    <div className="Home">
     <Routes>
        <Route path='/' element={<div className="Home">
              {products.map(product => (
                    <ProductsList
                      key={product._id}
                      id={product._id}
                      image={product.image[0].url}
                      name={product.name}
                      price={product.price}
                    />
                  ))}
              </div>}/>
      </Routes>  
    </div>   
  )
}