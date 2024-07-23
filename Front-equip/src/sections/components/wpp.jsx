import React from 'react'
import Styles from './wppStyles.module.css'
import Wpp from '../../assets/whatsapp.png'

function wpp() {
  return (
    <div className={Styles.circulo}>
        <a href="https://wa.me/+5519997282358" target="_blank" rel="noopener noreferrer">
        <img className={Styles.img} src={Wpp} alt="WhatsApp" />
      </a>
    </div>
  )
}

export default wpp