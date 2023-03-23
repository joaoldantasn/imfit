import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Halter } from '../Assets/imfit.svg';
import { UserContext } from '../UserContext';
import { ReactComponent as Duvidas } from '../Assets/duvidas.svg';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="IMFit - Home">
          <Halter />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/duvidas">
            <Duvidas />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
