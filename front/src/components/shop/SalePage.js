import React, { Fragment } from 'react'
import '../../styles/components/shop/SalePage.css'
import { Link } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export const SalePage = () => {
  return (
    <Fragment>
        <Header/>
        <div class="main-01-sale">
        <div>
            
        </div>
        <div class="nav-view">
            <Link to={"/"} id="back-lk-view">
                <nav class="fa-solid fa-arrow-left" id="back-view"></nav>
            </Link>
            <h2 class="title-sale">Sistema de gestión de<span> Ventas</span></h2>
            <div></div>
        </div>
        <table class="datable-view">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nº de Venta</th>
                    <th>Productos Vendidos</th>
                    <th>Monto</th>
                    <th>Productos totales</th>
                    <th>Usuario</th>
                    <th>Fecha de venta</th>
                    </tr>
            </thead>
            <tbody>
                <tr >
                    <td text="ID1">001</td>
                    <td text="NVenta">1</td>
                    <td text="Productos_vendido">3</td>
                    <td text="Monto">15000</td>
                    <td text="Productost">5</td>
                    <td text="Usuario">andres@gmail.com</td>
                    <td text="Fecha">03/10/2022</td>
                </tr>
                <tr >
                    <td text="ID1">002</td>
                    <td text="NVenta">2</td>
                    <td text="Productos_vendido">1</td>
                    <td text="Monto">6000</td>
                    <td text="Productost">2</td>
                    <td text="Usuario">camilo@hotmail.com</td>
                    <td text="Fecha">9/10/2022</td>
                </tr>
                <tr >
                    <td text="ID1">003</td>
                    <td text="NVenta">3</td>
                    <td text="Productos_vendido">3</td>
                    <td text="Monto">7500</td>
                    <td text="Productost">3</td>
                    <td text="Usuario">carlos@yahoo.com</td>
                    <td text="Fecha">11/10/2022</td>
                </tr>
                <tr >
                    <td text="ID1">004</td>
                    <td text="NVenta">2</td>
                    <td text="Productos_vendido">4</td>
                    <td text="Monto">14000</td>
                    <td text="Productost">5</td> 
                    <td text="Usuario">andres@gmail.com</td>
                    <td text="Fecha">15/10/2022</td>
                </tr>
            </tbody>
        </table>
    </div>
    <Footer/>
    </Fragment>
  )
}

