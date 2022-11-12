import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import { getProducts } from '../actions/productActions';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { BannerHome } from '../components/layout/BannerHome';
import {CategoriesHeader} from '../components/layout/CategoriesHeader'
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import "../styles/pages/Home.css";
import "../styles/components/products/ProductLista.css";


function Home() {
  const params = useParams();
  const keyword = params.keyword;
  const [precio, setPrecio] = useState([100, 1000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, products, error, resPerPage, productsCount } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(getProducts(currentPage, keyword));
  }, [dispatch, error, currentPage, keyword]);
  console.log("keyword in home: ", keyword);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
    console.log(pageNumber,4)
  }
  return (
    <>
      <Header />
      <CategoriesHeader/>
      <Routes>
        <Route path='/' exact element={<BannerHome/>}/> 
      </Routes>
      
      <div className="Home">
        {products.map((product) => (
          <div key={product.id} className="tarjetaProduct">
            <div className="card" id={product._id}>
              <Link to={`/producto/${product._id}`}>
                <img src={product.image[0].url}></img>
              </Link>
            </div>
            <hr className="hr" />
            <div key={product.id}>
              <h3 className="productName">{product.name}</h3>
            </div>
            <div className="priceProduct">${product.price}</div>

            <div className="butonAgregar">
              <button>Agregar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={productsCount}
          onChange={setCurrentPageNo}
          nextPageText={"Siguiente"}
          prevPageText={"Anterior"}
          firstPageText={"Primera"}
          lastPageText={"Ultima"}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    <Footer />
    </>
  );
}

export default Home