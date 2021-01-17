import React from 'react'
import {ReactComponent as Logo} from '../../../Assets/Logo.svg';
import styles from './ModalMobile.module.css'

const ModalMobile = ({setModalActiveted}) => {
  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth >= 681) {
        setModalActiveted(false)
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setModalActiveted]);

  return (
    <header className={styles.modal}>
      <div className={styles.divX}>
          <button className={styles.x} onClick={() => setModalActiveted(false)}>X</button>
      </div>
      <nav>
        <ul className={styles.container}>
          <li><a href="/" className={styles.logo}> <Logo /> </a></li>
          <li><a href="/"> Pokedex </a></li>
          <li><a href="/"> Legendarios </a></li>
          <li><a href="/"> Documentation </a></li>
        </ul>
      </nav>
    </header>
  )
}

export default ModalMobile
