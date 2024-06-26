import React from 'react';
import styles from '../components/PesquisaStyles.module.css';
import lupa from '../../assets/lupa.png';

function Pesquisa() {
  return (
    <div className={styles.pesquisa}>
      <div className={styles.inputContainer}>
        <input type="text" name="pesquisa" id="buscar" placeholder='Pesquise aqui...' className={styles.buscar} />
        <img src={lupa} alt="lupa" className={styles.lupa} />
      </div>
    </div>
  );
}

export default Pesquisa;
