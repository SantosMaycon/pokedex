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