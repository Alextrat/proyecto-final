import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavComponent.module.css'


const NavComponent = ({authenticated, logoutUser}) => (
  <nav className={styles.Nav}>
    <ul className={styles.NavUl}>
      <li className={styles.NavLi}><Link className={styles.NavA} to ="/"><img className={styles.NavImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cC9q7hasU8hELqLEBJZuP2cE0K0WokavUg&usqp=CAU"alt='home'></img></Link></li>
      <li className={styles.NavLi}><Link className={styles.NavA} to ="/gallery">Películas</Link></li>
      <li className={styles.NavLi}><Link className={styles.NavA} to ="/register">Regístrate</Link></li>
      <li className={styles.NavLi}><Link className={styles.NavA} to ="/private">Área Privada</Link></li>
      {authenticated ? 
      (<li className={styles.NavLi}><Link className={styles.NavA} onClick={logoutUser}>| LogOut | </Link></li>) :
      (<li className={styles.NavLi}><Link className={styles.NavA} to ="/login">LogIn</Link></li>)}
      


    </ul>
  </nav>
);

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
