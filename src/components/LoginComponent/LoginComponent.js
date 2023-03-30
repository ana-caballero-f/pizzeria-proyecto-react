import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.module.scss';

/* importar bootstrap, useState. useDispatch, doLogin */
import { Form, Container, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../store/autentificacion/actions';
import { Navigate } from 'react-router';


const LoginComponent = () =>  {

  /* crear las variables que contienen los valores del nombre y el password */
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  /* hora 2:14 ya funciona logeo. tiene que dejar pasar si estás logeado */
  /* ================= */
  const {user} = useSelector((state)=> state.AutenReducer)


  const dispatch = useDispatch()

  function mirarLogin() {
    dispatch(doLogin({username:username, password: password}))
  }

/* hora 2:15 si hay un usuario y admeás el usuario tiene id , retorna un Navigate para redirecioar */
if(user && user.id){
  return (
    <Navigate to="/pedidos" replace></Navigate>
  )
}


return (
  <div className={styles.LoginComponent}>
    <Form>
      <FormGroup>
        <FormLabel>Nombre</FormLabel>
        <input value={username} onChange={(e) => setUsername(e.target.value) } laceholder='Introduce tu nombre' type={'text'}></input>
      </FormGroup>

      <FormGroup>
        <FormLabel>Contraseña</FormLabel>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Introduce tu contraseña' type={'password'}></input>
      </FormGroup>
      <Button onClick={mirarLogin}>Login</Button>
    </Form>
  </div>
)
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
