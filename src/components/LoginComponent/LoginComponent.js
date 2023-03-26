import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.module.scss';

/* importar bootstrap, useState. useDispatch, doLogin */
import { Form, Container, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../store/autentificacion/actions';



const LoginComponent = () =>  {

  /* crear las variables que contienen los valores del nombre y el password */
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const dispatch = useDispatch()

  function tryLogin() {
    // dispatch(doLogin({username:username, password: password}))
  }


return (
  <div className={styles.LoginComponent}>
    <Form>
      <FormGroup>
        <FormLabel>Nombre</FormLabel>
        <input placeholder='Introduce tu nombre' type={'text'}></input>
      </FormGroup>

      <FormGroup>
        <FormLabel>Contraseña</FormLabel>
        <input placeholder='Introduce tu contraseña' type={'password'}></input>
      </FormGroup>
      <Button>Login</Button>
    </Form>
  </div>
)
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
