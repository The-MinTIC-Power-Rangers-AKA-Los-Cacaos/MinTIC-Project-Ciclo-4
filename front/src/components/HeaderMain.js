import React from 'react'
import imagenmain from '../img/header-main.png'
import '../styles/HeaderMain.css'

export function HeaderMain(params) {
  return (
    <div className="imagenmain" >
      <img src={imagenmain} style={{width:"100%"}}></img>
    </div>
  )
}
