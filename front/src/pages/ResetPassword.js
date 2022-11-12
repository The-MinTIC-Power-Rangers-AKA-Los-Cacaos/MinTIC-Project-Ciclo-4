import React, {useState, useEffect} from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Fragment } from "react";
import "../styles/pages/ResetPassword.css";


export const ResetPassword = () => {

  const [active, setActive] = useState(false);

  const handleClick = ()=> {
    if(active===false){
      setActive(!active);
      }
  };



  return (
    <div>
      <Header />
      <Fragment>
      <div>
          <h2 class="tituloRegistro">Restablece tu contraseña</h2>
          <h3 class="textoAdicional">
            Ingresa la dirección de correo electrónico con la que te
            registraste.
          </h3>

          <div class="ppal">
            <div class="cuadroPpal1">
              <div class="CampoRegistro">
                <p class="infoRegistro">Email:</p>
                <input type="email" class="inputRegistro"></input>
              </div>


              <button class="recuperar" id="buttonPpal" onClick={handleClick} >
                <label  class="labelBoton"for="touch1">
                { active ? "¡Enviado!" : "Recuperar Contraseña"}
                </label>
                
              </button>




              <input type="checkbox" id="touch1" />
              <ul class="slide1">
                <li class="listaCorreo">Si el correo ingresado es correcto,</li>
                <li class="listaCorreo">
                  recibiras un link para restaurar la contraseña
                </li>
              </ul>
            
            </div>
          </div>
        </div>

        
      </Fragment>
      <Footer />
    </div>
  );
};
