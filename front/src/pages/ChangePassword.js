import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Fragment } from "react";
import "../styles/pages/ChangePassword.css";

export const ChangePassword = () => {
    return (
    <div>
        <Header />
        <Fragment>
        <div>
            <h2 class="tituloRegistro2">Cambia tu contraseña</h2>
            <div class="ppal">
                <div class="cuadroPpal2">

                <ul class="cuadroRegistro2">
                    <li class="CamposRegistro">
                        <p class="infoRegistro">Nueva contraseña:</p>
                    <input class="inputRegistro2"></input>
                    </li>

                    <li class="CamposRegistro">
                        <p class="infoRegistro">Vuelve a escribir la contraseña: </p>
                    <input class="inputRegistro2"></input>
                    </li>
                </ul>
                <button class="BtnAceptar">Aceptar</button>
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
