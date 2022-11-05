import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../../styles/components/products/ProductDetail.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { clearErrors } from "../../actions/productActions";
import { getProductDetails } from "../../actions/productActions";

export const ProductDetail = () => {
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );

  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);



  useEffect(() => {
    dispatch(getProductDetails(params.id));
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, params.id]);

  let element;
  let noEl;

  product.image &&
    product.image.map((e, i) => {
      i === 0 ? (element = e.url) : (noEl = "");
      return element;
    });

  const [sliderData, setSliderData] = useState(element);

  /* const increaseQty = () => {
       const contador = document.querySelector('.count')
 
       if (contador.valueAsNumber>=product.inventario) return;
 
       const qty = contador.valueAsNumber+1;
       setQuantity(qty)
    }
 
    const decreaseQty = () => {
     const contador = document.querySelector('.count')
 
     if (contador.valueAsNumber <= 1) return;
 
     const qty = contador.valueAsNumber-1;
     setQuantity(qty)
    }
*/

  const handleCLick = (index) => {
    const slider = product.image[index];
    setSliderData(slider.url);
  };

  return (
    <Fragment>
      <Header />
      {
        /*loading ? (
         <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
       ) : (*/
        <div className="containerCardMain">
          <div key={product.id} className="cardLeft">
            <div className="imageContainer">
              <img src={sliderData || element} />
            </div>
            <div className="imagensCarousel">
              {product.image &&
                product.image.map((img, index) => (
                  <img
                    key={img.name}
                    className="imgContainer"
                    src={img.url}
                    onClick={() => handleCLick(index)}
                    alt={product.nombre}
                  ></img>
                ))}
            </div>
          </div>
          <div className="cardRigth">
            <div className="rigthOne">
              <div className="nameProduct">
                <h1 className="titlteMain ">{product.name}</h1>
              </div>
              <h2 className="productDesciption">{product.description}</h2>

              <h3 className="priceProductMain hprice">${product.price}</h3>
              <br />
              <h2 className="seller">
                Vendedor: <span className="sellerName">{product.seller} </span>{" "}
              </h2>
              <h2 className="rate">
                Calificación: <span className="rateCantidad">{quantity}</span>
              </h2>
            </div>
            <div className="rigthTwo">
              <div className="containerButon">
                <button>Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </Fragment>
  );
};

{
  /*const {loading, product, error} = useSelector(state =>state.productDetails)
    const {loading, product, error} = useSelector(state =>state.productDetails)
    const {id} =useParams();
    const dispatch= useDispatch();
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        dispatch(getProductDetails(id))
        if (error){
            dispatch(clearErrors())
        }
    
       }, [dispatch, error, id])

       const increaseQty = () => {
        const contador = document.querySelector('.count')
  
        if (contador.valueAsNumber>=product.inventario) return;
  
        const qty = contador.valueAsNumber+1;
        setQuantity(qty)
     }
  
     const decreaseQty = () => {
      const contador = document.querySelector('.count')
  
      if (contador.valueAsNumber <= 1) return;
  
      const qty = contador.valueAsNumber-1;
      setQuantity(qty)
     }

     console.log(product.rate)

       return (
           <>
               
               <Header />

              {/* <div className='imageContainer'>
                          {product.image && product.image.map(img =>(
                           <img className='imgContainer' src={img.url} alt="img"></img>
                           ))}
                </div>
                <div className='rating-outer'>
                <div className="rating-inner" style={{width: `${(product.rate/5)*100}%`}}></div>
                </div>*/
}

{
  /*<div className='containerCardMain' >
                   <div key={product.id} className='cardLeft' >
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" pause='hover'>
                    <div className='col-12 col-lg-5 img-fluid carousel-inner' id="imagen_producto" >
                        <div className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400">
                            {product.image && product.image.map(img =>(
                                <img className="d-block w-100 carousel-item active" src={img.url} alt={product.nombre}></img>
                            ))}
                            </div>
                            </div>
                    </div>
                                    

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
        */
}
