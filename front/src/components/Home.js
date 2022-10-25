import React from "react";
import { productData } from "../api/productData";
import CardProducts from "./CardProducts";
import '../styles/Home.css'


export function HomeProducts(props) {
    
    return(
    
    <div className="Home">
      {productData.map(product => (
        <CardProducts 
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          totalSales={product.totalSales}
          timeLeft={product.timeLeft}
          rating={product.rating}
        />
      ))}   
    </div>
    )
}