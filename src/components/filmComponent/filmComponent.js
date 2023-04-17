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
    });
  },[]);

  return(
  <div className={styles.FilmCardContainter}>
    {film? 
    <>
    <h1 className={styles.TextoFilm}>{film.nombre}</h1>

    
    <img className={styles.ImagenFilm}src={film.caratula} alt={film.name}></img>
    
    <h3 className={styles.TitleFilm}>{film.dirección}</h3>
    <h4 className={styles.YearFilm}>{film.año}</h4>
    <h4 className={styles.CategoryFilm}>{film.clasificacion}</h4>
    <p className={styles.filmCardContainterText}>{film.sinopsis}</p>
   
    </>
    : 'cargando...'}
    

  </div>)
};


export default FilmComponent;
