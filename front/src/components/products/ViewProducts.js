import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/components/products/ViewProducts.css"

const ViewProducts = () => {
  return (
    <Fragment>
    <div class="main-01">
        <div>
            
        </div>
        <div class="nav-view">
            <Link to={"/"} id="back-lk-view">
                <nav class="fa-solid fa-arrow-left" id="back-view"></nav>
            </Link>
            <h2 class="title-view">Sistema de gestión de<span> Productos</span></h2>
            <Link to={"/newproduct"} id="btn-lk-view">
                <button id="btn-view" >Nuevo</button>
            </Link>
        </div>
        <table class="datable-view">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>Inventario</th>
                    <th>Calificación</th>
                    <th>Comentarios</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    </tr>
            </thead>
            <tbody>
                <tr >
                    <td text="ID1">001</td>
                    <td text="Nombre1">Acetaminofen</td>
                    <td text="Precio">8000</td>
                    <td text="Categoria">Salud</td>
                    <td text="Inventario">104</td>
                    <td text="calificacion">4.5/5</td>
                    <td text="cometarios">30</td> 
                    <td><button class="btn-table btn-table-editar"><a href="#">Editar</a></button></td>
                    <td><button class="btn-table btn-table-eliminar"><a href="#">Eliminar</a></button></td>
                </tr>
                <tr >
                    <td text="ID1">002</td>
                    <td text="Nombre1">Advil</td>
                    <td text="Precio">7000</td>
                    <td text="Categoria">Salud</td>
                    <td text="Inventario">100</td>
                    <td text="calificacion">4.2/5</td>
                    <td text="cometarios">132</td> 
                    <td><button class="btn-table btn-table-editar"><a href="#">Editar</a></button></td>
                    <td><button class="btn-table btn-table-eliminar"><a href="#">Eliminar</a></button></td>
                </tr>
                <tr >
                    <td text="ID1">003</td>
                    <td text="Nombre1">Noxpirin</td>
                    <td text="Precio">4500</td>
                    <td text="Categoria">Salud</td>
                    <td text="Inventario">86</td>
                    <td text="calificacion">3.8/5</td>
                    <td text="cometarios">50</td> 
                    <td><button class="btn-table btn-table-editar"><a href="#">Editar</a></button></td>
                    <td><button class="btn-table btn-table-eliminar"><a href="#">Eliminar</a></button></td>
                </tr>
                <tr >
                    <td text="ID1">004</td>
                    <td text="Nombre1">Pedialyte</td>
                    <td text="Precio">7600</td>
                    <td text="Categoria">Nutrición</td>
                    <td text="Inventario">20</td>
                    <td text="calificacion">4.8/5</td>
                    <td text="cometarios">10</td> 
                    <td><button class="btn-table btn-table-editar"><a href="#">Editar</a></button></td>
                    <td><button class="btn-table btn-table-eliminar"><a href="#">Eliminar</a></button></td>
                </tr>
            </tbody>
        </table>
    </div>
    </Fragment>
  )
}

export default ViewProducts