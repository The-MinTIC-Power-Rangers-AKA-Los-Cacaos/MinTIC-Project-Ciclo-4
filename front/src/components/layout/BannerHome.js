import React, { Fragment } from 'react'
import imagenmain from '../../img/banner-home.png'
import "../../styles/components/layout/BannerHome.css"

export function BannerHome(params) {
  return (
    <Fragment>
      <div className="bannerContainer" >
        <div className='imagenContainer'>
          <img src={imagenmain} style={{ width: "100%" }}></img>
        </div>
      </div>
    </Fragment>

  )
}
