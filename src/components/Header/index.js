import React from 'react'
import {ReactComponent as Logo} from '../../Assets/Logo.svg';
import styles from './styles.module.css'
import ModalMobile from './ModalMobile';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [modalActiveted, setModalActiveted] = React.useState(false)
  return (
    modalActiveted ? <ModalMobile setModalActiveted={setModalActiveted} /> :
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <a href="/" title="Logo da página" className={styles.logo}> 
            <Logo />
          </a>
        </div>
        <nav>
        <ul className={styles.list}>
          <li><NavLink to="/"  activeClassName={styles.active} end >Home</NavLink></li>
          <li><NavLink to="search" activeClassName={styles.active} >Pokédex</NavLink></li>
          <li><a href="/">Legendaries</a></li>
          <li><a href="/">Documentation</a></li>
        </ul>
        <div className={styles.divButton} onClick={() => setModalActiveted(true)}>
          <button className={styles.button} ></button>
        </div>
      </nav>
      </div>
    </header>
  )
}

export default Header
