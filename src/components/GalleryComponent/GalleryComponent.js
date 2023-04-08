import React, { useContext, useState } from 'react';
import { FilmsContext } from '../../context/context';
import styles from './GalleryComponent.module.css'
import { Link } from 'react-router-dom';

const GalleryComponent = () => {
  const { films }= useContext(FilmsContext)
  const [filmsPrint, setFilmsPrint] = useState(films)
  const [valorInput, setValorInput]= useState([])

  function handleChange(e){   
    e.preventDefault()
    setValorInput(e.target.value)
    search(e.target.value)
}
function search ( busqueda){
  let filtered = filmsPrint.filter((film) =>
    film.nombre.toLowerCase().includes(busqueda.toLowerCase()) 
    
  )
  setFilmsPrint(filtered)
}
function reset (){
  setFilmsPrint(films)
   setValorInput("")
}
  
  return(
    <div>
  <div className={styles.searchbar}>
  {/* <input value={valorInput} onChange={handleChange} type='search'></input> */}
  <input value={valorInput} onChange={handleChange} type='search'></input>
    <button onClick={reset}>Restablecer </button>
    <input value="accion" name ="accion" type='checkbox'></input>
  </div>


    <div className={styles.gallery}>
    {films.length?(
      <>
        {filmsPrint.map((film)=>(
          <>
          <Link to = "/film">
        <div className={styles.gallery_item}>
        {/* <h3 key={film.id}>{film.id}</h3> */}
        <h3 key={film.id}>{film.nombre}</h3>  
        {/* <h3>{film.año}</h3>   */}
        {/* <h3>{film.clasificacion}</h3> */}
        <img className={styles.gallery_img} src={film.caratula} alt={film.nombre}></img>
        </div>   
        </Link>
        </>
        ))} 
    </>
    )   :   (<p>Cargando...</p>)}
    </div>
    </div>
);}



export default GalleryComponent;
