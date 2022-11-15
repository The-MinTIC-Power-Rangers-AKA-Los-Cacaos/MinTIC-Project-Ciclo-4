import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProducts, getProductsAll } from "../../actions/productActions";

export const CategoryRecomended = ({ category }) => {
  const { products } = useSelector((state) => state.products);
  console.log("produtos en categorias:", products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAll());
  }, [dispatch]);

  const productsInCategory = [];
  products.forEach((product) =>
    product.category == category
      ? productsInCategory.push(product)
      : console.log(product)
  );
  console.log("nuevo:", productsInCategory);
  /*function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }*/

  return (
    <>
      <div className="categoryRecomendedContainer">
        <div className="categoryRecomended">
          {productsInCategory.map((product) => (
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
                <Link to={`/producto/${product._id}`}>
                  <button>Ver más</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*<div className="pagination">
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
        </div>*/}
    </>
  );
};
