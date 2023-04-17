import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function RequiredAuth({children, authenticated}){

    //aqui almacenamos en una variable la última localización del usuario para ver si es un usuario autentificado o no
    let location = useLocation();

    //si authenticated es false, nos envía a loguearnos
    if (!authenticated) {
        return <Navigate to ="/login" state={{from:location}} replace/>;
    }

    //si authenticated es true, podemos navegar por cualquier página
    return children;
    


};