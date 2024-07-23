import styles from './btnStyles.module.css'
import { Link } from 'react-router-dom';

function ButtonGroup() {
  return (
    <><div className={styles.buttonGroup}>
      <Link to={"/produtos"} className={styles.button}>Produtos</Link>
      <a href="#sobre-nos" className={`${styles.button} ${styles.buttonLink}`}>Sobre nós</a>
      <a href="#cnt-nos" className={`${styles.button} ${styles.buttonLink}`}>Contate nós</a>
    </div>
    </>
  );
}

export default ButtonGroup;
