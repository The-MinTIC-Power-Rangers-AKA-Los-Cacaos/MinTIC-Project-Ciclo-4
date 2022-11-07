import React, { Fragment } from 'react'
import '../../styles/components/shop/ControlPage.css'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import {Link} from 'react-router-dom'

export const ControlPage = () => {
  return (
    <Fragment>
    <Header/>
    <div class="nav-control">
            <Link to={"/"} id="back-lk-control">
                <nav class="fa-solid fa-arrow-left" id="back-control"></nav>
            </Link>
            <h2 class="title-control">Página de <span>Control</span></h2>
            <div></div>
    </div>
    <div class ="main-shop">
    <div class="card-control">
        <Link to={"/view"} class="card-lk-control">
            <div class="item item--1">
                <a class="fa-solid fa-box"></a>
                <span class="quantity"> 90+ </span>
                <span class="text text--1"> Productos </span>
            </div>
        </Link>
        <Link to={"/"} class="card-lk-control">
            <div class="item item--2">
                <a class="fa-solid fa-tag"></a>
                <span class="quantity"> 70+ </span>
                <span class="text text--2"> Pediddos </span>
            </div>
        </Link>
        <Link to={"/"} class="card-lk-control">
            <div class="item item--3">
                <a class="fa-solid fa-users"></a>
                <span class="quantity"> 150+ </span>
                <span class="text text--3"> Usuarios </span>
            </div>
        </Link>
        <Link to={"/"} class="card-lk-control">
            <div class="item item--4">
                <a class="fa-solid fa-xmark"></a>
                <span class="quantity"> 30+ </span>
                <span class="text text--4"> Agotados </span>
            </div>
        </Link>
        <Link to={"/saleslist"} class="card-lk-control">
            <div class="card-p">
                <div class="header">
                    <div class="img-box">
                    <a class="fa-solid fa-sack-dollar"></a>
                    </div>
                    <h1 class="titlee">Ventas totales</h1>
                </div>
                <div class="content">
                    <p>
                        1000$
                    </p>
                </div>
            </div>
        </Link>
        
        
    </div>
    </div>
    <Footer/>
    </Fragment>
  )
}

