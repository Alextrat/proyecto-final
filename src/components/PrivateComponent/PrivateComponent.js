import React from 'react';
import styles from './PrivateComponent.module.css';
import axios from 'axios';



const PrivateComponent = ({user}) => {

 async function actualizar(){
   await axios.patch(`http://localhost:3000/users/${user.id}`,{name: user.name, surname: user.surname, email: user.email})
  }

  return (
    <div className={styles.PrivateContainer}>
      <form className={styles.PrivateForm}>
      <h1 className={styles.Saludo}> Hola {user.name} </h1>
        <fieldset className={styles.PrivateFieldset}>
          <legend className={styles.PrivateLegend}>
            Tus datos personales son: 
          </legend>
          <label className={styles.PrivateLabel}>Nombre:</label>
          <input className={styles.PrivateInput} defaultValue={user.name} onChange={(e)=> user.name = e.target.value}/>
          <br></br>
          <label className={styles.PrivateLabel}>Apellido:</label>
          <input className={styles.PrivateInput} defaultValue={user.surname}  onChange={(e)=> user.surname = e.target.value}/>
          <br></br>
          <label className={styles.PrivateLabel}>Email:</label>
          <input className={styles.PrivateInput} defaultValue={user.email}  onChange={(e)=> user.email = e.target.value} />
          <br></br>
        </fieldset>
        <button onClick={actualizar} className={styles.PrivateButton} type="button">OK</button>
      </form>
    </div>
  )
}

export default PrivateComponent
