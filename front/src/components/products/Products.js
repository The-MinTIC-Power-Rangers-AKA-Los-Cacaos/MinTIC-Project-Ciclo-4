import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/pages/Home.css";
import "../../styles/components/products/ProductLista.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { BannerHome } from "../layout/BannerHome";

export function Products() {
  const params = useParams();
  const keyword = params.keyword;
  const [precio, setPrecio] = useState([100, 1000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, products, error, resPerPage, productsCount } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(currentPage, keyword, precio));
  }, [dispatch, error, currentPage, keyword, precio]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
    console.log(pageNumber,4)
  }
  

  return (
    <>
      <BannerHome />
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
    </>
  );
}
