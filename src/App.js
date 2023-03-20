import './App.css';

import { Route, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import LogoComponent from './components/LogoComponent/LogoComponent'


import HomePage from './pages/HomePage/HomePage';
import CartaPage from './pages/CartaPage/CartaPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ReservaPage from './pages/ReservaPage/ReservaPage';
import MultiCommentsPage from './pages/MultiCommentPage/MultiCommentPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <LogoComponent></LogoComponent>
      <NavigationComponent></NavigationComponent>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/carta' element= {<CartaPage/>}></Route>
        <Route exact path='/about' element={<AboutPage/>}></Route>
        <Route exact path='/reservas' element={<ReservaPage/>}></Route>
        <Route exact path='/comments' element={<MultiCommentsPage/>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
