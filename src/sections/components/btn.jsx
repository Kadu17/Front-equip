import React from 'react';
import styles from './btnStyles.module.css'
import Slogan from '../../assets/Slogan.jpg'

function ButtonGroup() {
  return (
    <><div className={styles.buttonGroup}>
      <button className={styles.button}>Produtos</button>
      <button className={styles.button}>Sobre nós</button>
      <button className={styles.button}>Contate nós</button>
    </div>
    <div className={styles.CntImg}>
      <img className={styles.slogan} src={Slogan} alt="" />  
    </div></>
  );
}

export default ButtonGroup;
