import React, { Fragment, useState} from 'react'
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { MDBDataTable } from 'mdbreact'
import { getProducts } from '../../actions/productActions'
import "../../styles/components/products/ViewProducts.css"
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Pagination from 'react-js-pagination';

const ViewProducts = () => {
   
    const params = useParams();
    const keyword = params.keyword;
    const [precio, setPrecio] = useState([100, 1000000]);
    const [currentPage, setCurrentPage] = useState(1);
    const { loading, products, error, resPerPage, productsCount } = useSelector(
      (state) => state.products
    );

    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getProducts(currentPage, keyword, precio));
      }, [dispatch])



    const setProducts = () => {
        let data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Categoría',
                    field: 'category',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label:'Descripción',
                    field:'description',
                    sort:'asc'
                },
                {
                    label:'Puntaje',
                    field:'rate',
                    sort:'asc'
                }
            ],
            rows: []
        }
        console.log("productsinfuncion:", products)
        products.map(product => {
            
            data.rows.push({
                name: product.name,
                price: `$${product.price}`,
                category: product.category,
                stock: product.stock,
                description: product.description,
                rate: product.rate
            })
        })
        console.log("data:",data)

        return data;
    }

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber);
        console.log(pageNumber,5)
      }




  return (
    <Fragment>
    <Header/>
    <div class="main-01">
        <div>
            <h1></h1>
        </div>
        <div class="nav-view">
            <Link to={"/control"} id="back-lk-view">
                <nav class="fa-solid fa-arrow-left" id="back-view"></nav>
            </Link>
            <h2 class="title-view">Sistema de gestión de<span> Productos</span></h2>
            <Link to={"/new"} id="btn-lk-view">
                <button id="btn-view" >Nuevo</button>
            </Link>
        </div>
        <div class="Table-viewProducts">
        <MDBDataTable
            data={setProducts()}
            className="px-3"
            bordered
            striped
            noBottomColumns={true}
            theadTextWhite={true}
            paging={false}
            hover/>
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
    </div>
    <Footer/>
    </Fragment>
  )
}

export default ViewProducts