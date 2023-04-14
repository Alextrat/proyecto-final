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
    <h2>{film.nombre}</h2>
   
    <img src={film.caratula} alt={film.name}></img>

    <h4>{film.dirección}</h4>
    <h4>{film.año}</h4>
    <h4>{film.clasificacion}</h4>
    <p>{film.sinopsis}</p>
    </>
    : 'cargando...'}
    <input type='text'></input>
  </div>)
};


export default FilmComponent;
