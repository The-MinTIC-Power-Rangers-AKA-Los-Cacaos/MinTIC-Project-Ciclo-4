import React, { Fragment } from 'react'
import "../../styles/layout/Footer.css"

const footer = () => {
  return (
    <Fragment>
        <footer class="Rectangle">
        <div class="box">
            <a href="#" class="fa-brands fa-facebook" ></a>
            <a href="#" class="fa fa-telegram"></a>
            <a href="#" class="fa fa-whatsapp"></a>
            <a href="#" class="fa fa-github"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-instagram"></a>
        </div>
        </footer>
    </Fragment>
  )
}

export default footer