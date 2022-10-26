import React, { Fragment } from 'react'
import "../../styles/layout/ViewProducts.css"

const ViewProducts = () => {
  return (
    <Fragment>
    <main>
        <div>
            
        </div>
        <div class="nav">
            <div></div>
            <h2 class="title">Sistema de gestión de<span> Productos</span></h2>
            <button id="btn-nuevo" ><a >Nuevo</a></button>
        </div>
        <table class="datable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>NIT</th>
                    <th>Creacion</th>
                    <th>Actualizacion</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    </tr>
            </thead>
            <tbody>
                <tr >
                    <td text="ID1"></td>
                    <td text="Nombre1"></td>
                    <td text="direccion1"></td>
                    <td text="telefono1"></td>
                    <td text="nit1"></td>
                    <td text="creacion1"></td>
                    <td text="actualizacion1"></td>
                    <td><button class="btn-table btn-table-editar"><a href="#">Editar</a></button></td>
                    <td><button class="btn-table btn-table-eliminar"><a href="#">Eliminar</a></button></td>
                </tr>
            </tbody>
        </table>
    </main>
    </Fragment>
  )
}

export default ViewProducts