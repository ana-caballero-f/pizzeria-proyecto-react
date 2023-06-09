import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';



import HomePage from './pages/HomePage/HomePage';
import CartaPage from './pages/CartaPage/CartaPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ReservaPage from './pages/ReservaPage/ReservaPage';
import MultiCommentsPage from './pages/MultiCommentPage/MultiCommentPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CommentPage from './pages/CommentPage/CommentPage';
import PedidosPage from './pages/PedidosPage/PedidosPage';



function App() {

  const {user} = useSelector((state)=> state.AutenReducer)
  return (
    <div className="App">
      
      <NavigationComponent></NavigationComponent>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/carta' element= {<CartaPage/>}></Route>
        <Route exact path='/about' element={<AboutPage/>}></Route>
        <Route exact path='/reservas' element={<ReservaPage/>}></Route>
        <Route exact path='/comments' element={<MultiCommentsPage/>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        <Route exact path= '/comment/:id' element={<CommentPage/>}></Route>
        <Route exact path= '/pedidos' element={user && user.id? <PedidosPage/> : <LoginPage/>}></Route>
        
      </Routes>
    
    </div>
  );
}

export default App;
