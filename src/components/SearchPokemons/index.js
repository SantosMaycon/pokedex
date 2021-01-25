import React from 'react'
import styles from './styles.module.css'
import CardPokemon from './CardPokemon'
import InputPokemon from './InputPokemon'
import Error from '../Helpers/Error'

const SearchPokemons = () => {  
  return (
    <main>
      <div className={styles.container}>
        <h3 className={styles.title}>800 <span>Pokemons</span> for you to choose your favorite</h3>
        <InputPokemon />
        <CardPokemon />
      </div>
    </main>
  )
}

export default SearchPokemons
