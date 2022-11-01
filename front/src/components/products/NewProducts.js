import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import "../../styles/components/products/NewProducts.css"

const NewProducts = () => {
  return (
    <Fragment>
    <Header/> 
    <div class="main-new">
        <div class="op-1">
            <label class="btn-menu" for="input-icono-menu">
                <Link to={"/login"} id="back-lk-new">
                    <nav class="fa-solid fa-arrow-left" src="#" id="back-new"></nav>
                </Link>
            </label>
            <h2 class="h2-new">Creación de nuevo <br></br> <span class="color1-new"> Producto</span></h2>
            <a ></a>
        </div>
        <div class="Rectangle-new">
            <form  class="form-new">
                <label class="Text-1-new">Nuevo <span class="color1-new" > Producto</span></label>
                <div class="textos-new">
                    <label class="Text-2-new" for="nombre">Nombre :</label>
                    <label class="Text-3-new" for="precio">Precio :</label>
                    <label class="Text-4-new" for="categoria">Categoria :</label>
                    <label class="Text-5-new" for="inventario">Inventario :</label>
                </div>
                <div class="inputs-new">
                    <input class="Input-1-new" type="text"  id="nombre" required="required"></input>
                    <input class="Input-2-new" type="number"  id="precio" required="required"></input>
                    <select class="Input-3-new" type="text"  id="categoria" required="required">
                        <option>Higiene</option>
                        <option>Salud</option>
                        <option>Aseo</option>
                        <option>Comida</option>
                        <option>Nutrición</option>
                    </select>
                    <input class="Input-4-new" type="text"  id="inventario" required="required"></input>
                </div>
                <div class="textos-2-new">
                    <label class="Text-6-new" for="descripcion">Descripción :</label>
                    <label class="Text-7-new" for="imagen">Imagen :</label>
                </div>
                <div class="inputs-2-new">
                    <textarea class="Input-5-new" type="text"  id="descripcion" required="required"></textarea>
                    <input class="Input-6-new" type="text"  id="imagen" required="required"></input>
                </div>
                <input class="bto-2-new" type="submit" value="Crear producto"></input>
                <div><label class="tex">.</label></div>
            </form>
        </div>
        </div>
    <Footer/>
    </Fragment>
 )
}

export default NewProducts