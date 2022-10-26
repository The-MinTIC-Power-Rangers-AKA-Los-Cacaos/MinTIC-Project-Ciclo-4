import React, { Fragment } from 'react'
import "../../styles/layout/Header.css"

const header = () => {
  return (
    <Fragment>
    <header class="Rectangle-1">
        <a href="#"><img class="logo-1" src="../../img/logorecortada.png" alt=""></img></a>

        <div class="wrap">
            <div class="search">
               <input type="text" class="searchTerm" placeholder ="¿Que estas buscando?"></input>
               <button type="submit" class="searchButton">
                 <i class="fa fa-search"></i>
              </button>
            </div>
         </div>

         <div class="carrito">
            
        <a href="#"><img class="img-carrito" src="./img/carrito.png" alt=""></img></a>


         </div>

        <nav>
            <label for="touch"><span><img class="login-1" src="./img/usuarios.png" alt=""></img></span></label>
            <input type="checkbox" id="touch"></input>
            <ul class="slide">
                <li class="text-menu">Correo Electronico:</li>
                <li><input type="text" class="input-menu"></input></li>
                <li class="text-menu">Contraseña:</li>
                <li><input type="text" class="input-menu"></input></li>
                <li><a href="#"><button class="salir">Ingresar</button></a></li>
                <li class="registro">¿Aun no estas registrado?</li>
                <li class="registrate"><a href="#">Registrate</a></li>
            </ul>
        </nav>
    </header>
    </Fragment>
  )
}

export default header