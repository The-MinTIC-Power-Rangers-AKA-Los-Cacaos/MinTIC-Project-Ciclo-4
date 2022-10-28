import React from "react";
import { Routes, Route} from 'react-router-dom'
import { productData } from "../../api/productData";
import '../../styles/pages/Home.css';
import {ProductsList} from "./ProductsList";


export function Products(props) {

  return (
    <div className="Home">
     <Routes>
        <Route path='/' element={<div className="Home">
              {productData.map(product => (
                    <ProductsList
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                    />
                  ))}
              </div>}/>
      </Routes>  
    </div>   
  )
}