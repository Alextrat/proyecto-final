import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavComponent.module.css'


const NavComponent = ({authenticated, logoutUser}) => (
  <nav className={styles.nav}>
    <ul>
      <li><Link to ="/">Home</Link></li>
      <li><Link to ="/gallery">Películas</Link></li>
      <li><Link to ="/register">Regístrate</Link></li>
      {authenticated ? (<li><button onClick={logoutUser}>LogOut</button></li>):
      (<li><Link to ="/login">LogIn</Link></li>)}
    </ul>
  </nav>
);

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
