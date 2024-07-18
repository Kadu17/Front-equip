import styles from './btnStyles.module.css'
import { Link } from 'react-router-dom';

function ButtonGroup() {
  return (
    <><div className={styles.buttonGroup}>
      <Link to={"/produtos"} className={styles.button}>Produtos</Link>
      <button className={styles.button}>Sobre nós</button>
      <button className={styles.button}>Contate nós</button>
    </div>
    </>
  );
}

export default ButtonGroup;
