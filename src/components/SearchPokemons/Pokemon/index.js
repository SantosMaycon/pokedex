import React from "react";
import styles from "./styles.module.css";
import { addScroll, convertTypeToColor } from "../../../Utils/Util";
import ModalPokemon from "./ModalPokemon";

const Pokemon = ({ pokemon }) => {
  const [modalActiveted, setModalActiveted] = React.useState(false);
  addScroll();
  if (pokemon) {
    return (
      <>
        {modalActiveted && (
          <ModalPokemon
            pokemon={pokemon}
            setModalActiveted={setModalActiveted}
          />
        )}
        <div
          className={styles.card}
          onClick={() => setModalActiveted(true)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.info}>
            <h5 className={styles.cardTitle}>{pokemon.name_}</h5>
            <div className={styles.stats}>
              <div>
                <span>{pokemon.attack}</span>
                <h6>Attack</h6>
              </div>
              <div>
                <span>{pokemon.defense}</span>
                <h6>Defense</h6>
              </div>
            </div>
            <ul className={styles.type}>
              {pokemon.types_.map((type) => (
                <li
                  key={type + 1}
                  style={{ background: convertTypeToColor(type) }}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={styles.img}
            style={{
              backgroundColor: convertTypeToColor(pokemon.color),
              backgroundImage: `url(${pokemon.src})`,
            }}
          >
            <div className={styles.idPokemon}>
              <span>#{pokemon.id}</span>
            </div>
          </div>
        </div>
      </>
    );
  } else return <div>Nada</div>;
};

export default Pokemon;
