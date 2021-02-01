import React from 'react'
import { convertTypeToColor, getGeneretion, removeScroll } from '../../../../Utils/Util'
import styles from './styles.module.css'

const ModalMobilePokemon = ({ pokemon, setModalActiveted }) => {
  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth >= 679) {
        setModalActiveted(false)
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setModalActiveted]);
  removeScroll()
  return (
    <div className={styles.modal} style={{ background: convertTypeToColor(pokemon.types_[0]) }} onClick={() => setModalActiveted(false)}>
      <h1 className={styles.title}>{ pokemon.name_ }</h1>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={pokemon.src} alt={pokemon.name_} />
        </div>
        <div className={styles.column}>
          <span className={styles.id}>{ pokemon.id }</span>
          <span className={styles.generation}>{ getGeneretion(pokemon.id) }</span>
          <ul className={styles.type}>
            { pokemon.types_.map((type) => <li key={type + 1} style={{ background: convertTypeToColor(type) }}>{ type }</li> ) }  
          </ul>
        </div>
        <div className={styles.abilities}>
          <h5>Abilities</h5>
          <span>{ pokemon.abilities_.join(" - ") }</span>
        </div>
        <div className={styles.xp}>
          <div>
            <h5>Healthy Points</h5>
            <span>{ pokemon.health }</span>
          </div>
          <div>
            <h5>Experience</h5>
            <span>{ pokemon.base_experience }</span>
          </div>
        </div>
        <div className={styles.stats}>
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
  )
}

export default ModalMobilePokemon
