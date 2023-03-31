import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavComponent from './components/NavComponent/NavComponent';
import {HomePage} from './pages/HomePage/HomePage';
import {GalleryPage} from './pages/GalleryPage/GalleryPage'
import {LoginPage} from './pages/LoginPage/LoginPage'
import {RegisterPage} from './pages/RegisterPage/RegisterPage'
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
