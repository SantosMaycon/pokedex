export function convertTypeToColor(type) {
  switch (type) {
    case "grass":
    case "bug":
      return "#70A83B";

    case "steel":
    case "dark":
    case "rock":
      return "#A1A1A1";

    case "ice":
    case "water":
      return "#A2CFF0";

    case "fire":
    case "fighting":
    case "dragon":
      return "#F76545";

    case "normal":
    case "flying":
      return "#76AADB";
      
    case "poison":
    case "psychic":
    case "fairy":
    case "ghost":
      return "#A974BC";

    case "ground":
      return "#9B897B"

    case "electric":
      return "#F7C545"

    default:
      return "#000"
  }
}

export function getPokemon(json) {
  const { id, name, types, stats, sprites } = json;
  // const src = "https://pokeres.bastionbot.org/images/pokemon/"+ id +".png";
  const src = sprites.other['official-artwork']['front_default'];
  const attack = stats[1].base_stat
  const defense = stats[2].base_stat
  const types_ = types.map((type) => type.type.name)
  const color = types_[0]
  return { id , name, types_, src, attack, defense, color }
}

export function orderPokemons(a, b) {
  if( a.id < b.id ) {
    return -1;      
  }
  if( a.id > b.id ) {
    return 1;
  }
  return 0;
}
