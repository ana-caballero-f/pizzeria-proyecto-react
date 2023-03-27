import './App.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import LogoComponent from './components/LogoComponent/LogoComponent'
import HomePage from './pages/HomePage/HomePage';
import CartaPage from './pages/CartaPage/CartaPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ReservaPage from './pages/ReservaPage/ReservaPage';
import MultiCommentsPage from './pages/MultiCommentPage/MultiCommentPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PedidosPage from './pages/PedidosPage/PedidosPage';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';


import {login} from './auth/auth';


function App() {

  // para hacer la autentificación

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const loginUser = ({ username, password }) => {
    setUser(login({ username, password }))
  };

  const logoutUser = () => setUser(null);


  return (
    <div className="App">
      <Router>
        <LogoComponent></LogoComponent>
        <NavigationComponent authenticated={authenticated}/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/carta' element= {<CartaPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/reservas' element={<ReservaPage/>}></Route>
          <Route path='/comments' element={<MultiCommentsPage/>}></Route>
          <Route path='/login' element={<LoginPage loginUser={loginUser} />}/>
          <Route path='/pedidos' element= {
            <RequiredAuth authenticated={authenticated}>
                <PedidosPage></PedidosPage>
            </RequiredAuth>
          }/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
