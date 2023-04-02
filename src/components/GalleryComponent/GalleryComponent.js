import React, { useContext } from 'react';
import { FilmsContext } from '../../context/context';


const GalleryComponent = () => {
  const { films }= useContext(FilmsContext)
  console.log(films)
  
  return(

    <div>
    {films.length?(
      <>
        {films.map((film)=>(
          <>
        <div>
        <h3 key={film.id}>{film.id}</h3>
        <h3>{film.nombre}</h3>  
        <h3>{film.año}</h3>  
        <h3>{film.clasificacion}</h3>
        <img src={film.caratula} alt={film.nombre}></img>
        </div>   
        </>
        ))} 
    </>
    )   :   (<p>Cargando...</p>)}
    </div>
);}

GalleryComponent.propTypes = {};

GalleryComponent.defaultProps = {};

export default GalleryComponent;
