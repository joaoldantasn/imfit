import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Halter } from '../Assets/imfit.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="IMFit - Home">
          <Halter />
        </Link>
        <Link className={styles.login} to="/login">
          Login/Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;