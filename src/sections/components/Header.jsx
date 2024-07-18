import React from 'react'
import styles from './HeaderStyles.module.css'
import Logo from '../../assets/Logo.png'

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt="" />
    </div>
    
  )
}

export default Header
