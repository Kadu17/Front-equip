import styles from './btnStyles.module.css'
import Slogan from '../../assets/Slogan.jpg'

export default function Banner() {
  return (
    <div className={styles.CntImg}>
      <img className={styles.slogan} src={Slogan} alt="" />  
    </div>
  )
}
