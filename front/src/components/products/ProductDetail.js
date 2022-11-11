import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
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
  console.log(product);

  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, error, id]);

  let element;
  let noEl;

  product.image &&
    product.image.map((e, i) => {
      i === 0 ? (element = e.url) : (noEl = "");
      return element;
    });

  const [sliderData, setSliderData] = useState(element);

  const handleCLick = (index) => {
    const slider = product.image[index];
    setSliderData(slider.url);
  };

  let newRate = Math.ceil(product.rate);
  let classNameRate;
  switch (newRate) {
    case 0:
      classNameRate = <span className="score s0" />;
      break;
    case 1:
      classNameRate = <span className="score s1" />;
      break;
    case 2:
      classNameRate = <span className="score s2" />;
      break;
    case 3:
      classNameRate = <span className="score s3" />;
      break;
    case 4:
      classNameRate = <span className="score s4" />;
      break;
    case 5:
      classNameRate = <span className="score s5" />;
      break;
    case 6:
      classNameRate = <span className="score s6" />;
      break;
    case 7:
      classNameRate = <span className="score s7" />;
      break;
    default:
      classNameRate = <span className="score s7" />;
      break;
  }

  return (
    <Fragment>
      <Header />
      {loading ? (
        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
      ) : (
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
              <p className="parrafoRate">Rate: {classNameRate}</p>
              <p className="noOpiniones">{product.totalRatings} Reviews</p>
              <h2 className="rate">
                Calificaciones: <span className="rateCantidad">{quantity}</span>
              </h2>
            </div>
            <div className="rigthTwo">
              <div className="containerButon">
                <button>Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};
