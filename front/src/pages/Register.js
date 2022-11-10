import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Fragment } from "react";
import "../styles/pages/Register.css";

export const Register = () => {
  return (
    <div>
      <Header />
      <Fragment>
      <div>
          <h2 class="tituloRegistro">Registrate</h2>
          <h3 class="textoAdicional">Podras gestionar tus compras y recibir ofertas especiales.</h3>

          <div class="ppal">

            <div class="cuadroPpal">

              <ul class="cuadroRegistro">
                <li class="CamposRegistro">
                  <p class="infoRegistro">Nombre:</p>
                  <input class="inputRegistro"></input>
                </li>

                <li class="CamposRegistro">
                  <p class="infoRegistro">Email:</p>
                  <input class="inputRegistro"></input>
                </li>

                <li class="CamposRegistro">
                  <p class="infoRegistro">Contraseña:</p>
                  <input class="inputRegistro"></input>
                </li>

                <li class="CamposRegistro">
                  <p class="infoRegistro">Confirmar Contraseña:</p>
                  <input class="inputRegistro"></input>
                </li>
              </ul>
            
            <button class="registrarse">Registrarse</button>

              </div>
          </div>
      </div>

        <div>
          <div class="pieDePagina">
            <img class="imagenPieDePagina" src="../../img/pieDePaginaRe.png" />
          </div>
        </div>
      </Fragment>
      <Footer />
    </div>
  );
};
