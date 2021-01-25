export const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export function POKEMON_GET(pokemon) {
  return {
    url: API_URL + pokemon,
    options: {
      method: 'GET',
    }
  }
}

export function POKEMONS_GET(limit = 9, offset = 0) {
  return {
    url: `${API_URL}?limit=${limit}&offset=${offset}`,
    options: {
      method: 'GET',
    }
  }
}