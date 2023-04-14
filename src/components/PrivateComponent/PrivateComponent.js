import React from 'react';
import styles from './PrivateComponent.module.css';



const PrivateComponent = ({user}) => {

  
  return (
    <div className={styles.PrivateContainer}>
      <form className={styles.PrivateForm}>
      <h1 className={styles.Saludo}> Hola {user.name} </h1>
        <fieldset className={styles.PrivateFieldset}>
          <legend className={styles.PrivateLegend}>
            Tus datos personales son: 
          </legend>
          <label className={styles.PrivateLabel}>Nombre:</label>
          <input className={styles.PrivateInput} defaultValue={user.name}/>
          <br></br>
          <label className={styles.PrivateLabel}>Apellido:</label>
          <input className={styles.PrivateInput} defaultValue={user.surname}/>
          <br></br>
          <label className={styles.PrivateLabel}>Email:</label>
          <input className={styles.PrivateInput} defaultValue={user.email}/>
          <br></br>
        </fieldset>
        <button className={styles.ButtonReg} type="button">OK</button>
      </form>
    </div>
  )
}

export default PrivateComponent
