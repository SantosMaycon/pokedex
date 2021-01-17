import React from 'react'
import {ReactComponent as Logo} from '../../Assets/Logo.svg';
import styles from './Header.module.css'
import ModalMobile from './ModalMobile/ModalMobile';

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
          <li><a href="/"  className={styles.active} >Home</a></li>
          <li><a href="/">Pokédex</a></li>
          <li><a href="/">Legendaries</a></li>
          <li><a href="/">Documentation</a></li>
        </ul>
        <div className={styles.divButton}>
          <button className={styles.button} onClick={() => setModalActiveted(true)}></button>
        </div>
      </nav>
      </div>
    </header>
  )
}

export default Header
