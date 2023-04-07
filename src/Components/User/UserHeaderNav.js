import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MinhasFotos } from '../../Assets/foto.svg';
import { ReactComponent as Estatisticas } from '../../Assets/stat.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/add.svg';
import { ReactComponent as Treinos } from '../../Assets/peso.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta/fotos" end>
        <MinhasFotos />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
      </NavLink>
      <NavLink to="/conta/Treinos">
        <Treinos />
      </NavLink>
    </nav>
  );
};

export default UserHeaderNav;
