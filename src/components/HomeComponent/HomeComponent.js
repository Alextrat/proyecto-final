import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FilmsContext } from '../../context/context';
import styles from './HomeComponent.module.css'

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const HomeComponent = () => { 
  const {favourites} = useContext(FilmsContext);
  
  return ( 
    
  <div className={styles.ContainerFilms}>
  
  <h2>PELICULAS RECOMENDADAS DEL MES</h2>
    <Swiper className={styles.SwiperContainer}
      style={{
        "--swiper-navigation-color": "rgb(206, 64, 242)",
        "--swiper-navigation-border": "solid rgb(206, 64, 242) 2px"
      }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        autoplay={{delay:1500}}
        navigation={true}
        >

      {favourites.map(favourite => {
        return(
          <SwiperSlide className={styles.Container}>
          <img src={favourite.caratula} alt={favourite.nombre}></img>
          </SwiperSlide>
        )
      })}
    </Swiper>


  </div>
)

};

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
