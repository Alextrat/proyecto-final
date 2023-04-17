import React, { useContext } from 'react';

import { FilmsContext } from '../../context/context';
import styles from './FavouriteComponent.module.css'

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const FavouriteComponent = () => { 
const {favourites} = useContext(FilmsContext);



    return ( 
    <>
    <div className={styles.ContainerFilms}>
    
    <Swiper className={styles.SwiperContainer}
    style={{
        "--swiper-navigation-color": "yellow",
        "--swiper-navigation-border": "solid yellow 2px"
    }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        autoplay={{delay:2000}}
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
</>
)

};

FavouriteComponent.propTypes = {};

FavouriteComponent.defaultProps = {};

export default FavouriteComponent;