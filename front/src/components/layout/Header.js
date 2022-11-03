import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/components/layout/Header.css"

const Header = () => {
  return (
    <Fragment>
      <header class="Rectangle-1">
        <Link to={'/'}><img class="logo-1" src="../../img/logorecortada.png" alt=""></img></Link>

        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="¿Qué estás buscando?"></input>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>

        {/* <div class="carrito">

          <a href="#"><img class="img-carrito" src="./img/carrito.png" alt=""></img></a>


        </div> */}

        <Link to={'/cart'} class="carrito"><div>
          <img class="img-carrito" src="../../img/carrito.png" alt="" />
        </div></Link>

        <nav>
          <label for="touch"><span><img class="login-1" src="../../img/usuarios.png" alt=""></img></span></label>
          <input type="checkbox" id="touch"></input>
          <ul class="slide">
            <li class="text-menu">Correo Electronico:</li>
            <li><input type="text" class="input-menu"></input></li>
            <li class="text-menu">Contraseña:</li>
            <li><input type="text" class="input-menu"></input></li>
            <li><Link to={'/login'}><button class="salir">Ingresar</button></Link></li>
            <li class="registro">¿Aun no estas registrado?</li>
            <li class="registrate"><Link to={'/register'}>Registrate</Link></li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header