import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavComponent from './components/NavComponent/NavComponent';
import {HomePage} from './pages/homePage/homePage';
import {GalleryPage} from './pages/galleryPage/galleryPage';
import {LoginPage} from './pages/loginPage/loginPage';
import {RegisterPage} from './pages/registerPage/registerPage';
import { FilmsContextProvider } from './context/context';
function App() {
  return (
    <div className="App">
    <NavComponent/>
    <FilmsContextProvider>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/gallery" element={<GalleryPage/>}></Route>
      <Route exact path='/login' element={<LoginPage/>}></Route>
      <Route exact path='/register' element={<RegisterPage/>}></Route>
      </Routes>
    </FilmsContextProvider>
    </div>
  );
}
export default App;
