import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationComponent.module.scss';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationComponent = () => {
  return (
    <Navbar bg="secondary" variant='dark'>
      <Container>
        <Nav>
          <Link className={styles.NavLink} to='/'>Inicio</Link>
          <Link className={styles.NavLink} to='/carta'>Carta</Link>          
          <Link className={styles.NavLink} to='/about'>Sobre nosotros</Link>          
          <Link className={styles.NavLink} to='/reservas'>Reservas & contacto</Link>          
          <Link className={styles.NavLink} to='/comments'>Comentarios</Link>
          <Link className={styles.NavLink} to='/login'>Login</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
