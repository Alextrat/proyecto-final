import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavComponent.module.css'


const NavComponent = ({authenticated, logoutUser}) => (
  <nav className={styles.nav}>
    <ul>
      <li><Link to ="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cC9q7hasU8hELqLEBJZuP2cE0K0WokavUg&usqp=CAU"alt='home'></img></Link></li>
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
