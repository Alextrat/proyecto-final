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
  const {films} = useContext(FilmsContext);
  
  return ( 
  <div className={styles.ContainerFilms}>
    <Swiper className={styles.SwiperContainer}
      style={{
        "--swiper-navigation-color": "rgb(222, 244, 19)",
        "--swiper-navigation-border": "solid rgb(222, 244, 19) 2px"
      }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        autoplay={{delay:1000}}
        navigation={true}
        >

      {films.map(film => {
        return(
          <SwiperSlide className={styles.Container}>
          <img src={film.caratula} alt={film.nombre}></img>
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
