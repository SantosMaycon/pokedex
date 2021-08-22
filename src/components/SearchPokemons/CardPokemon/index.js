import React from 'react'
import Pokemon from '../Pokemon'
import styles from './styles.module.css'

const CardPokemon = ({ pokemons }) => {
  return (
    <div className={styles.cardContainer}>
      { pokemons && pokemons.map( (pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/> ) }
    </div>
  )
}

export default CardPokemon
