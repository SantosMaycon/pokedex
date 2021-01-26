import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as Icon } from '../../../Assets/location.svg'

const InputPokemon = ({ setUrlList, setPokemons, setInfinite }) => {
  const [input, setInput] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    console.log(input)
    setPokemons([])
    setUrlList([`https://pokeapi.co/api/v2/pokemon/${input}/`])
    setInfinite(false)
  }

  function handleChange({target}) {
    setInput(target.value)
  }

  return (
    <form className={styles.form}  onSubmit={handleSubmit}>
      <input className={styles.search} 
        type="text" 
        placeholder="Encuentra tu pokémon..."
        onChange={handleChange}
        id="pokemon"
        name="pokemon"
      />
      <button className={styles.button}> <Icon /> </button>
    </form>
  )
}

export default InputPokemon
