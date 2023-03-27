import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.module.scss';

/* importar bootstrap, useState. useDispatch, doLogin */
import { Form, Container, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { useState } from 'react';



const LoginComponent = ({loginUser}) =>  {
   const Initial_state = {
    username: "",
    password:""
}

    const [FormUser, setFormUser] = useState(Initial_state);


    const handleInput =(e) => {
    const {id, value} = e.target;
    setFormUser({...FormUser,[id]: value})
}
 
    const onSubmit = (e) => {
      e.preventDefault()
      const {username, password} = FormUser;
      loginUser({username, password})
    }



return (
  <div className={styles.LoginComponent}>

        <form onSubmit={onSubmit}>

        <label htmlFor="username">Name</label>
        <input type="text" id='username' value={FormUser.username} onChange={handleInput}/>

        <label htmlFor="password">Password</label>
        <input type="text" id='password' value={FormUser.password} onChange={handleInput}/>
        <button type='submit'>Login</button>
        </form>
  

    {/* <Form>
      <FormGroup>
        <FormLabel>Nombre</FormLabel>
        <input id='username' value={FormUser.username} onChange={handleInput} placeholder='Introduce tu nombre' type='text'></input>
      </FormGroup>

      <FormGroup>
        <FormLabel>Contraseña</FormLabel>
        <input id='password' value={FormUser.password} onChange={handleInput} placeholder='Introduce tu contraseña' type='password'></input>
      </FormGroup>
      <Button onSubmit={onSubmit}>Login</Button>
    </Form>
  </div>
) */}

</div>
)
}


LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
