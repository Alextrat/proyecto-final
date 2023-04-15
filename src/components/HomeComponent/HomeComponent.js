import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './HomeComponent.module.css'






const HomeComponent = () => (
  <div className={styles.HomeComponent}>
    <h1 className={styles.Name}>Cine & Palomitas </h1>
      <div className={styles.HomeLinks}>
        <Link className={styles.HomeNavLink} to='/carta'>Carta</Link> 
        <Link className={styles.HomeNavLink} to='/reservas'>Reservas & contacto</Link>
      </div>
  </div>
);


HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
