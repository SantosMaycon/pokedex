import React from 'react'
import styles from './styles.module.css'
import CardPokemon from './CardPokemon'
import InputPokemon from './InputPokemon'
import { getPokemon, orderPokemons } from '../../Utils/Util'

const SearchPokemons = () => {
  document.querySelector("body").className = "normal"

  const [pokemons, setPokemons] = React.useState([])
  const [urlList, setUrlList] = React.useState([]);
  const [pages, setPages] = React.useState("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
  const [next, setNext] = React.useState(null);
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    fetch(pages)
    .then( (response) => response.json()).then( (json) => { 
      setUrlList(json.results.map((result) => result.url ))
      setNext(json.next) 
    })
  },[pages])

  React.useEffect(() => {
    urlList.map((url) => fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemons((pokemons) => [...pokemons, getPokemon(json)]))
    )
  },[urlList])

  React.useEffect(() => {
    let wait = false
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * 0.70 && !wait) {
          wait = true
          console.log("Inifite status:", infinite)
          console.log("Next:", next)
          setPages(next)
          setTimeout(() => {
            wait = false
          }, 3000)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  },[infinite, next])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h3 className={styles.title}>890 <span>Pokemons</span> for you to choose your favorite</h3>
        <InputPokemon setUrlList={setUrlList} setPokemons={setPokemons} setInfinite={setInfinite}/>
        { pokemons && <CardPokemon pokemons={pokemons.sort(orderPokemons)} /> }
      </div>
    </main>
  )
}

export default SearchPokemons
