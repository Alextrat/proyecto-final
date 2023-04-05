import React, { useContext, useState } from 'react';
import { FilmsContext } from '../../context/context';
import styles from './GalleryComponent.module.css'

const GalleryComponent = () => {
  const { films }= useContext(FilmsContext)
  const [filmsPrint, setFilmsPrint] = useState(films)
  const [valorInput, setValorInput]= useState([])

  function handleChange(e){   
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
  <input value={valorInput} onChange={handleChange} type='search'></input>
    <button onClick={reset}>Restablecer </button>
  </div>


    <div className={styles.gallery}>
    {films.length?(
      <>
        {filmsPrint.map((film)=>(
          <>
        <div className={styles.gallery_item}>
        {/* <h3 key={film.id}>{film.id}</h3> */}
        <h3>{film.nombre}</h3>  
        {/* <h3>{film.año}</h3>   */}
        {/* <h3>{film.clasificacion}</h3> */}
        <img className={styles.gallery_img} src={film.caratula} alt={film.nombre}></img>
        </div>   
        </>
        ))} 
    </>
    )   :   (<p>Cargando...</p>)}
    </div>
    </div>
);}



export default GalleryComponent;
