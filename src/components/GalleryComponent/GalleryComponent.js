import React, { useContext, useState } from 'react';
import { FilmsContext } from '../../context/context';
import styles from './GalleryComponent.module.css'
import { Link } from 'react-router-dom';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const GalleryComponent = ({user, id}) => {
  const { films }= useContext(FilmsContext)
  const [filmsPrint, setFilmsPrint] = useState(films)
  const [valorInput, setValorInput]= useState([])

  function handleChange(e){   
    e.preventDefault()
    setValorInput(e.target.value)
    if(e.target.value!== ""){
      search(e.target.value)
    }
   else{
    reset()
   }
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

function deleteFilm (id) {
  setFilmsPrint(filmsPrint.filter(films=>films.id===id))
}
console.log(id)

  
  return(
    <div>
  <div className={styles.searchbar}>
  <input value={valorInput} onChange={handleChange} type='search'></input>
    <button onClick={reset}>Restablecer </button>
  </div>

  <SimpleBar style={{ maxHeight: 700, color:'white'}}>
    <div className={styles.gallery}>
    
    {films.length?(
      <>
        {filmsPrint.map((film)=>(
          <>
          
        
          <Link to = {`/film/${film.id}`}>
          
        <div className={styles.gallery_item}>
        {/* <h3 key={film.id}>{film.id}</h3> */}
        <h3 key={film.id}>{film.nombre}</h3>  
        {/* <h3>{film.año}</h3>   */}
        {/* <h3>{film.clasificacion}</h3> */}
        <img className={styles.gallery_img} src={film.caratula} alt={film.nombre}></img>
         {user?  <button onClick={() => deleteFilm(films.id)}>🗑️</button>: ''}
        </div>   
        </Link>

        </>
        ))} 
    </>
    )   :   (<p>Cargando...</p>)}
    </div>
    </SimpleBar>
    </div>
    
);}



export default GalleryComponent;
