import React from "react";
import { productData } from "../../api/productData";
import CardProducts from "./CardProducts";
import '../../styles/layout/Home.css';
import { BannerHome } from "./BannerHome";




export function HomeProducts(props) {
    
    return(
    <>
      <div className="Home">
      <BannerHome />
      {productData.map(product => (
        <CardProducts 
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
       ))}   
      </div>
       
      {/*<div className="homeProduct">
      {productData.map(product => (
        <CardProductMain
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          totalSales={product.totalSales}
          timeLeft={product.timeLeft}
          rating={product.rating}
        />
        ))}   
      </div>*/}
    </>
    )
}