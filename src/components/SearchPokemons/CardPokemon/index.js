import React from 'react'
import { convertTypeToColor } from '../../../Utils/Util'
import styles from './styles.module.css'

const CardPokemon = () => {
  const [pokemon, setPokemon] = React.useState()

  React.useEffect(() => {
    async function fetchPokemon(pk) {
      if (pk > 890)
        pk = 1;

      const resoponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + pk)
      const json = await resoponse.json()
      const { id, name, types, stats } = json;
      const src = "https://pokeres.bastionbot.org/images/pokemon/"+ id +".png";
      const attack = stats[1].base_stat
      const defense = stats[2].base_stat
      const types_ = types.map((type) => type.type.name)
      const color = types_[0]
      setPokemon({ id , name, types_, src, attack, defense, color });
    } fetchPokemon(12);
  }, [])

  console.log(pokemon)

  if (pokemon) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.info}>
            <h5 className={styles.cardTitle}>{ pokemon.name }</h5>
            <div className={styles.stats}>
              <div>
                <span>{ pokemon.attack }</span>
                <h6>Attack</h6>
              </div>
              <div>
                <span>{ pokemon.defense }</span>
                <h6>Defense</h6>
              </div>
            </div>
            <ul className={styles.type}>
              { pokemon.types_.map((type) => <li key={type + 1} style={{ background: convertTypeToColor(type) }}>{ type }</li> ) }  
            </ul>
          </div>
          <div className={styles.img} style={{ backgroundColor: convertTypeToColor(pokemon.color) , backgroundImage: `url(${pokemon.src})` }}>
            <div className={styles.idPokemon}>
              <span>#{ pokemon.id }</span>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
    
}

export default CardPokemon
