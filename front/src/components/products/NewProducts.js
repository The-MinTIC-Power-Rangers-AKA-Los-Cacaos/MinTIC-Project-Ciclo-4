import React, { Fragment } from 'react'
import "../../styles/components/products/NewProducts.css"

const NewProducts = () => {
  return (
    <Fragment>
    <main>
        <div class="op-1">
            <label class="btn-menu" for="input-icono-menu">
                <nav class="fa-solid fa-arrow-left" src="#" id="back"></nav>
            </label>
            <h2>Creación de nuevo <br></br> <span class="color1"> Producto</span></h2>
            <a ></a>
        </div>
        <div class="Rectangle-2">
            <form  class="form-1">
                <p class="Text-1">Nuevo <span class="color1" > Producto</span></p>
                <div class="textos">
                    <label class="Text-2" for="nombre">Nombre :</label>
                    <label class="Text-3" for="telefono">Teléfono :</label>
                    <label class="Text-4" for="direccion">Direccion :</label>
                    <label class="Text-5" for="nit">NIT :</label>
                </div>
                <div class="inputs">
                    <input class="Input-1" type="text"  id="nombre" required="required"></input>
                    <input class="Input-2" type="number"  id="telefono" required="required"></input>
                    <input class="Input-3" type="text"  id="direccion" required="required"></input>
                    <input class="Input-4" type="text"  id="nit" required="required"></input>
                </div>
                <input class="bto-2" type="submit" value="Crear empresa"></input>
                <div><label class="tex">.</label></div>
            </form>
        </div>
        </main>
    </Fragment>
 )
}

export default NewProducts