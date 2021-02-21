import React from "react";
import styles from "./styles.module.css";

const Main = () => {
  document.querySelector("body").className = "gradiente";

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            <span>Find</span> all your favorite <span>Pokemon</span>
          </h1>
          <h2 className={styles.subtitle}>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </h2>
          <a href="search" className={styles.button}>
            See pokemons
          </a>
        </div>
        <div className={styles.img}></div>
      </div>
    </main>
  );
};

export default Main;
