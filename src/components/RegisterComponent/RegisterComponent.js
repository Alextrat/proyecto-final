import React, { useContext } from 'react';

import {styles} from './RegisterComponent.module.css'
import { FilmsContext } from '../../context/context';


const RegisterComponent = ({registerUser}) => {
  const {users} = useContext(FilmsContext)
function registrar(){
  
}

  return(
    <form>
    <div>
    <p></p>
      <div>
        <label for="email">Email</label>
        <input type='email'  placeholder='email' name = "email"></input>
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type='password'  placeholder='contraseña' name = "password"></input>
      </div>
      <div>
        <label for="firstname">Nombre</label>
        <input type='text'  placeholder='nombre' name = "firstname"></input>
      </div>
      <div>
        <label for="lastname">Apellidos</label>
        <input type='text'  placeholder='apellidos' name = "lastname"></input>
      </div>
    </div>
    <button onClick={registrar}>Regístrate</button>
    </form>
  )
}

export default RegisterComponent;
