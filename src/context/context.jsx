import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from 'react'

export const FilmsContext = createContext()

const url = "http://localhost:3000/"

export const FilmsContextProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [rankings, setRankings] = useState([])
  const [comments, setComments] = useState([])
  const [ users, setUsers] = useState([])

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
    <FilmsContext.Provider value={{films, rankings, comments, users}}>
        {children}
    </FilmsContext.Provider>
  )
}
