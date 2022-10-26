import React from 'react'
import imagenmain from '../../img/banner-home.png'
import '../../styles/layout/BannerHome.css'

export function BannerHome(params) {
  return (
    <div className="bannerContainer" >
      <div className='imagenContainer'>
        <img src={imagenmain} style={{width:"100%"}}></img>
      </div>
      
    </div>
  )
}
