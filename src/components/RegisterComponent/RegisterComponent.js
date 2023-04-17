import React, { useState } from 'react';
import styles from './RegisterComponent.module.css'


const RegisterComponent = ({registerUser}) => {

  const Initial_state = {
    email: "",
    password: "",
    firstname : "",
    lastname: ""
  }
  const [FormUser, setFormUser] = useState(Initial_state)
  
  const handleInput = (ev) => {
    const {id, value} = ev.target;
    setFormUser({...FormUser,[id]:value})

  }
  
  const onSubmit = (ev) => {
    ev.preventDefault()
    const {email, password, firstname, lastname} = FormUser;
    registerUser({email, password, firstname, lastname})
  }
  
  return(
    <div className={styles.RegContainer}>
    <form onSubmit={onSubmit}>
    <div>
      <div>
        <label className={styles.MailReg} htmlFor="email">Email</label>
        <input type='text' id='email' value={FormUser.email} onChange={handleInput}></input>
      </div>
      <div>
        <label className={styles.MailReg} htmlFor="password">Contraseña</label>
        <input type='password'  id='password' value={FormUser.password} onChange={handleInput}></input>
      </div>
      <div>
        <label className={styles.MailReg} htmlFor="firstname">Nombre</label>
        <input type='text' id='firstname' value={FormUser.firstname} onChange={handleInput}></input>
      </div>
      <div>
        <label className={styles.MailReg} htmlFor="lastname">Apellidos</label>
        <input type='text' id='lastname' value={FormUser.lastname} onChange={handleInput}></input>
      </div>
    </div>
    <button className={styles.ButtonReg} type='submit'>Regístrate</button>
    </form>
    </div>
  );
};

export default RegisterComponent;
