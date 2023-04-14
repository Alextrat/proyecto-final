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
  <div className='filmCardContainter'>
   
    {film? 
    <>
    <h2>{film.nombre}</h2>
    <img src={film.caratula} alt={film.name}></img>
    <h3>{film.dirección}</h3>
    <h3>{film.año}</h3>
    <h3>{film.clasificacion}</h3>
    <p>{film.sinopsis}</p>
    </>
    : 'cargando...'}
  </div>)
};


export default FilmComponent;
