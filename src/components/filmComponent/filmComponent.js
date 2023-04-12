import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const FilmComponent = () => {
  const params = useParams();

  const [peli, setPeli] = useState(null)

  useEffect(()=>{
    axios.get(`http://localhost:3000/peliculas/${params.id}`)
    .then((pliculadb)=>{
      console.log(pliculadb)
      setPeli(pliculadb.data)
    })
  },[])
  return(
  <div>
    FilmComponent Component <h1>hola{params.id}</h1>

    {peli? <img src={peli.caratula}></img>: ''}
  </div>)
};


export default FilmComponent;
