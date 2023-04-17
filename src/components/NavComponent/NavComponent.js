import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavComponent.module.css'


const NavComponent = ({authenticated, logoutUser}) => (

  <div className={styles.NavBar}>
    <div className={styles.Logo}>
      <Link to ="/"><img src='https://i0.wp.com/cineypalomitas.com/wp-content/uploads/2022/11/cropped-CINE-Y-PALOMITAS-scaled-1.jpg?fit=2549%2C1810&ssl=1'alt="logo"></img></Link>
    </div>
  
  <nav className={styles.Nav}>
    <ul className={styles.NavUl}>
     
      <li className={styles.NavLi}><Link className={styles.NavA} to ="/gallery">Películas</Link></li>
      <li className={styles.NavLi}><Link className={styles.NavA} to ="/register">Regístrate</Link></li>
      {authenticated ? 
        <li className={styles.LiPrivate}><Link className={styles.NavA} to ="/private">Área Privada</Link></li> : ""}
      {authenticated ? 
      (<li className={styles.NavLi}><Link className={styles.NavA} onClick={logoutUser}>| LogOut | </Link></li> ) :
      (<li className={styles.NavLi}><Link className={styles.NavA} to ="/login">LogIn</Link></li>)}
     
        
      


    </ul>
  </nav>
  </div>
);

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
