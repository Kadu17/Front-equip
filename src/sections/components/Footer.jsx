import React from 'react'
import Styles from './Footer.module.css'
import Telefone from '../../assets/ligar.png'
import Email from '../../assets/email.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'

function Footer() {
  return (
    <div id='cnt-nos' className={Styles.footer}>
        <div className={Styles.titulo}>
          <div>
            <h2>Atendimento</h2>
            <div className={Styles.ImgGroup}>
              <img className={Styles.Img} src={Telefone} alt="" />
              <h4>(19) 99728-2358</h4>
            </div>
            <div className={Styles.ImgGroup1}>
              <img className={Styles.Img} src={Email} alt="" />
              <h4>frontexpresscampinas@gmail.com</h4>
            </div>
          </div>
          <div>
            <h2>Redes sociais</h2>
            <div className={Styles.txt}>
              <p>Siga-nos nas redes sociais.<br/> e fique por dentro de todas<br/> as novidades.</p>
            </div>
            <div className={Styles.icones}>
            <a href="https://www.facebook.com/share/koJaLNjrThDjDV72/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/front_equip?igsh=OGhtZ2o0Y2dvc2Jk&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="" />
            </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
