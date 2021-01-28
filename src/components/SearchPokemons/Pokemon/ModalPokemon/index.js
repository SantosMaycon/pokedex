import React from 'react'
import styles from './styles.module.css'
import { convertTypeToColor, getGeneretion } from '../../../../Utils/Util'

const ModalPokemon = ({ pokemon, setModalActiveted }) => {
  console.log("Modal Pokemon:", pokemon)
  return (
    <div className={styles.modal}>
      <div className={styles.card} onClick={() => setModalActiveted(false)}>
        <div className={styles.img} style={{ backgroundColor: convertTypeToColor(pokemon.color) , backgroundImage: `url(${pokemon.src})` }}>
          <ul className={styles.type}>
            { pokemon.types_.map((type) => <li key={type + 1} style={{ background: convertTypeToColor(type) }}>{ type }</li> ) }  
          </ul>
        </div>
        <div className={styles.info}>
          <div className={styles.row1}>
            <h3 className={styles.title}>{ pokemon.name }</h3>
            <div style={{position: "relative"}}>
              <span className={styles.generation}>{ getGeneretion(pokemon.id) }</span>
              <span className={styles.id}>{ pokemon.id }</span>
            </div>
          </div>
          <div className={styles.row2}>
            <h5>Abilities</h5>
            <span>{ pokemon.abilities_.join(" - ") }</span>
          </div>
          <div className={styles.row3}>
            <div>
              <h5>Healthy Points</h5>
              <span>{ pokemon.health }</span>
            </div>
            <div>
              <h5>Experience</h5>
              <span>{ pokemon.base_experience }</span>
            </div>
          </div>
          <div className={styles.row4}>
            <div>
              <span>{ pokemon.defense }</span>
              <h6>Defense</h6>
            </div>
            <div>
              <span>{ pokemon.attack }</span>
              <h6>Attack</h6>
            </div>
            <div>
              <span>{ pokemon.attackSuper }</span>
              <h6>Sp Attack</h6>
            </div>
            <div>
              <span>{ pokemon.defenseSuper }</span>
              <h6>Sp Defense</h6>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ModalPokemon
