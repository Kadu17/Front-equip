import React from 'react';
import styles from './btnStyles.module.css';

function ButtonGroup() {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.button}>Produtos</button>
      <button className={styles.button}>Sobre nós</button>
      <button className={styles.button}>Contate nós</button>
    </div>
  );
}

export default ButtonGroup;
