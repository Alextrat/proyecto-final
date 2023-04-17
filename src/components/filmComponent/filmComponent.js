import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './FilmComponent.module.css'



const FilmComponent = () => {
  const params = useParams();

  const [film, setFilm] = useState(null)

  useEffect(()=>{
    axios.get(`http://localhost:3000/peliculas/${params.id}`)
    .then((pliculadb)=>{
      console.log(pliculadb)
      setFilm(pliculadb.data)
    })
  },[])
  return(
  <div className={styles.filmCardContainter}>
    {film? 
    <>
    <h2 className={styles.filmCardContainterTitle}>{film.nombre}</h2>
    
    <img className={styles.filmCardContainterImg}src={film.caratula} alt={film.name}></img>
    
    <h4 className={styles.filmCardContainterTitle}>{film.dirección}</h4>
    <h4 className={styles.filmCardContainterYear}>{film.año}</h4>
    <h4 className={styles.filmCardContainter}>{film.clasificacion}</h4>
    <p className={styles.filmCardContainterText}>{film.sinopsis}</p>
   
    </>
    : 'cargando...'}
    
  </div>)
};


export default FilmComponent;
