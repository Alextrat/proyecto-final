import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomeComponent.module.css'
import FavouriteComponent from '../FavouriteComponent/FavouriteComponent';






const HomeComponent = () => (
  <div className={styles.HomeComponent}>
    <h1 className={styles.Name}>Bienvenid@ a Cine & Palomitas </h1>
    <p className={styles.NameP}>En esta sección encontrarás, cada mes, una selección de mis películas favoritas</p>
      <div className={styles.HomeLinks}>
      <FavouriteComponent></FavouriteComponent>
      </div>
  </div>
);


HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
