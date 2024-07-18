import React from 'react'
import Styles from './wppStyles.module.css'
import Wpp from '../../assets/whatsapp.png'

function wpp() {
  return (
    <div className={Styles.circulo}>
        <img className={Styles.img} src={Wpp} alt="" />
    </div>
  )
}

export default wpp