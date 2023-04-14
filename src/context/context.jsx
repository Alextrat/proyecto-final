import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from 'react'

export const FilmsContext = createContext()
const url = "http://localhost:3000/"


//función (login) que  muestra el usuario con el mail y la password
export const login = async ({email, password}) => {
  const respuesta = await axios.post(`${url}login`,{email: email, password: password})
  // const respuesta = await axios.get(`${url}login`,{email: email, password: password})

  return respuesta.data
}
// 
export const register = async ({email, password, firstname, lastname}) => {
  const respuesta = await axios.post(`${url}register`,{email: email, password: password, firstname: firstname, lastname: lastname})
  return respuesta.data
}

//función para borrar una película de la galería si el usuario está logueado
export const deleteFilm = async (id) => {
  const respuesta = await axios.delete(`${url}peliculas/${id}`)
  return respuesta.data
}

export const FilmsContextProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [rankings, setRankings] = useState([])
  const [comments, setComments] = useState([])
  const [ users, setUsers] = useState([])
  const [favourites, setFavourites] = useState([])


  useEffect(()=>{
    const getFavourites = async () => {
      const favouritesApi = await axios.get(`${url}favoritas`)
      setFavourites(favouritesApi.data)
    }
    getFavourites()
  }, [])

  useEffect(()=>{
    const getFilms = async () =>{
        const filmsApi = await axios.get(`${url}peliculas`)
        setFilms(filmsApi.data)
    }
    getFilms()

  },[])
  useEffect(()=>{
    const getRankings = async () =>{
        const rankingsApi = await axios.get(`${url}clasificaciones`)
        setRankings(rankingsApi)
    }
    getRankings()

  },[])
  useEffect(()=>{
    const getComments = async () =>{
        const commentsApi = await axios.get(`${url}comments`)
        setComments(commentsApi)
    }
    getComments()

  },[])
  useEffect(()=>{
    const getUsers = async () =>{
        const usersApi = await axios.get(`${url}users`)
        setUsers(usersApi)
    }
    getUsers()

  },[])
  return (
    <FilmsContext.Provider value={{favourites, films, rankings, comments, users, setFilms}}>
        {children}
    </FilmsContext.Provider>
  )
  
}
