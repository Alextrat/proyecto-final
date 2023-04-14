import React, { useContext, useState } from "react";
import { FilmsContext, deleteFilm } from "../../context/context";
import styles from "./GalleryComponent.module.css";
import { Link } from "react-router-dom";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import axios from "axios";

const GalleryComponent = ({ user, id }) => {
  const { films, setFilms } = useContext(FilmsContext);
  const [filmsPrint, setFilmsPrint] = useState(films);
  const [valorInput, setValorInput] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setValorInput(e.target.value);
    if (e.target.value !== "") {
      search(e.target.value);
    } else {
      reset();
    }
  }
  function search(busqueda) {
    let filtered = filmsPrint.filter((film) =>
      film.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFilmsPrint(filtered);
  }
  function reset() {
    setFilmsPrint(films);
    setValorInput("");
  }

  async function removeFilm(id) {
    // eslint-disable-next-line no-restricted-globals
    const respuesta = confirm("Deseas eliminar esta pelicula?");
    if (respuesta) {
      await deleteFilm(id);
      setFilms(films.filter((x) => x.id !== id));
      setFilmsPrint(films.filter((x) => x.id !== id));
    }

    //setFilmsPrint(filmsPrint.filter(films=>films.id===id))
  }
  console.log(id);

  return (
    <div>
      <div className={styles.searchbar}>
        <input value={valorInput} onChange={handleChange} type="search"></input>
        <button onClick={reset}>Restablecer </button>
      </div>

      <SimpleBar style={{ maxHeight: 700, color: "white" }}>
        <div className={styles.gallery}>
          {films.length ? (
            <>
              {filmsPrint.map((film) => (
                <>
                  <div className={styles.gallery_item}>
                    {/* <h3 key={film.id}>{film.id}</h3> */}
                    <h3 key={film.id}>{film.nombre}</h3>
                    {/* <h3>{film.año}</h3>   */}
                    {/* <h3>{film.clasificacion}</h3> */}
                    <Link to={`/film/${film.id}`}>
                      <img
                        className={styles.gallery_img}
                        src={film.caratula}
                        alt={film.nombre}
                      ></img>
                    </Link>

                    {user ? (
                      <button onClick={() => removeFilm(film.id)}>🗑️</button>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ))}
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </SimpleBar>
    </div>
  );
};

export default GalleryComponent;
