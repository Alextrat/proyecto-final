import React, { useState} from 'react';
import styles from './LoginComponent.module.css';
import { Link } from 'react-router-dom';

const LoginComponent = ({loginUser}) => { 

 //estado inicial con los valores de email y password
const Initial_state = {
  email: "",
  password: ""
}

//defino que los datos que vengan del formulario serán el estado inicial
const [FormUser, setFormUser] = useState(Initial_state);

//función que me da los valores del input
const handleInput = (ev) => {
  const {id, value} = ev.target;
  setFormUser({...FormUser,[id]:value})

}
//función que almacena en una variable email el valor de formUser.email. El password en una variable llamada password el valor de formUser.password
const onSubmit = (ev) => {
  ev.preventDefault()
  const {email, password} = FormUser;
  loginUser({email, password})
};


  return(

    <div className={styles.LoginContainer}>
      
      <form onSubmit={onSubmit}>
        <label className={styles.MailLogin} htmlFor='email'>Email</label>
        <input type="text" id="email" value={FormUser.email} onChange={handleInput}/>
        <br/>
      
        <label className={styles.MailLogin} htmlFor='password'>Password</label>
        <input type="text" id="password" value={FormUser.password} onChange={handleInput}/>

        <br/>
        <button className={styles.ButtonLogin} type='submit'>Login</button>
        
      </form>
    </div>
  );
};
export default LoginComponent;