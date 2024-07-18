import React from 'react'
import Styles from './Sobre.module.css'

function Sobre() {
  return (
    <div className={Styles.sobre}>
        <h2 className={Styles.titulo}>Sóbre nós</h2>
        <p className={Styles.desc}>Em um mundo onde a segurança no ambiente de trabalho é <br/> fundamental,
            a Front Equip se destaca como uma líder na<br/> indústria de Equipamentos de Proteção Individual
            (EPI).<br/> Nossa empresa é movida por um compromisso inabalável<br/> com a proteção e o bem-estar
            dos trabalhadores em todos<br/> os setores, 
            oferecendo uma ampla gama de soluções de alta<br/> qualidade para garantir que cada profissional
            possa realizar<br/> suas atividades com confiança e segurança.
        </p>
    </div>
  )
}

export default Sobre