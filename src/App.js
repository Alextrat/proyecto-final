import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavComponent from './components/NavComponent/NavComponent';
import {HomePage} from './pages/homePage/homePage';
import {GalleryPage} from './pages/galleryPage/galleryPage'
import {LoginPage} from './pages/loginPage/loginPage'
import {RegisterPage} from './pages/registerPage/registerPage'
function App() {
  return (
    <div className="App">
    <NavComponent/>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/gallery" element={<GalleryPage/>}></Route>
      <Route exact path='/login' element={<LoginPage/>}></Route>
      <Route exact path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
