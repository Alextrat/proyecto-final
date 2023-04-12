import React from 'react';
import styles from './PrivateComponent.module.css';



const PrivateComponent = ({user}) => {

  
  return (
    <div>
      <form>
        <fieldset>
          <legend>
            Datos personales
          </legend>
          <label>Email:</label>
          <input defaultValue={user.email}/>
          <br></br>
          <label>Id:</label>
          <input defaultValue={user.id}/>
        </fieldset>
      </form>
    </div>
  )
}

export default PrivateComponent
