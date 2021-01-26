import React from 'react'
import styles from './styles.module.css'
import CardPokemon from './CardPokemon'
import InputPokemon from './InputPokemon'

const SearchPokemons = () => {
  const [pokemons, setPokemons] = React.useState([])
  const [urlList, setUrlList] = React.useState([]);
  const [next, setNext] = React.useState(null);
  const [previous, setPrevious] = React.useState(null);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0")
    .then( (response) => response.json()).then( (json) => { 
      setUrlList(json.results.map((result) => result.url ))
      setNext(json.next) 
      setPrevious(json.previous)
    })
  },[])

  console.log(urlList)

  React.useEffect(() => {
    urlList.map((url) => fetch(url).then((response) => response.json()).then((json) => {
      const { id, name, types, stats } = json;
      const src = "https://pokeres.bastionbot.org/images/pokemon/"+ id +".png";
      const attack = stats[1].base_stat
      const defense = stats[2].base_stat
      const types_ = types.map((type) => type.type.name)
      const color = types_[0]
      setPokemons((pokemons) => [...pokemons, { id , name, types_, src, attack, defense, color }] )
    }) )
  },[urlList])

  console.log("Pokemons:", pokemons)

  return (
    <main>
      <div className={styles.container}>
        <h3 className={styles.title}>890 <span>Pokemons</span> for you to choose your favorite</h3>
        <InputPokemon setUrlList={setUrlList} setPokemons={setPokemons}/>
        { pokemons && <CardPokemon pokemons={pokemons} /> }
      </div>
    </main>
  )
}

export default SearchPokemons
