import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavComponent from './components/NavComponent/NavComponent';
import {HomePage} from './pages/homePage/homePage';
import {GalleryPage} from './pages/galleryPage/galleryPage';
import {LoginPage} from './pages/loginPage/loginPage';
import {RegisterPage} from './pages/registerPage/registerPage';
import { FilmsContextProvider, login } from './context/context';
import { useState } from 'react';
import RequiredAuth from './components/RequiredAuth';


function App() {
const [user, setUser] = useState(null);
//comprobamos con un booleano que cuando el user no sea null, será true:
const authenticated = user != null;

 //función para pasar el email y el password desde context.js para que setUser recoja el usuario encontrado:
const loginUser = ({ email, password }) => setUser(login ({email, password}));

const logoutUser = () => setUser(null);





  return (
    <div className="App">
    {/*a NavComponent le paso authenticated para que sepa cuándo pintar el botón de login o logout y le paso la función logout para que la pueda usar */}
    <NavComponent authenticated={authenticated} logoutUser={logoutUser}/>
    {authenticated ? <p>{user.username}</p> : <p>No hay usuario</p>}
    <FilmsContextProvider>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/gallery" element={<GalleryPage/>}></Route>
      <Route exact path='/login' element={<LoginPage loginUser={loginUser}/>}></Route>
      <Route exact path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </FilmsContextProvider>
    </div>
  );
}
export default App;
