import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationComponent.module.scss';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationComponent = ({authenticated}) => {
  return (
    <Navbar bg="secondary" variant='dark'>
      <Container>
        <Nav>
          <Link className={styles.NavigationNavLink} to='/'>Inicio</Link>
          <Link className={styles.NavigationNavLink} to='/carta'>Carta</Link>          
          <Link className={styles.NavigationNavLink} to='/about'>Sobre nosotros</Link>          
          <Link className={styles.NavigationNavLink} to='/reservas'>Reservas & contacto</Link>          
          <Link className={styles.NavigationNavLink} to='/comments'>Comentarios</Link>
          <Link className={styles.NavigationNavLink} to='/pedidos'>Pedidos</Link>
          
          {authenticated ? (
            <Link className={styles.NavigationNavLink} to='/pedidos'>Pedidos</Link>
          ) : (
            <Link className={styles.NavigationNavLink} to='/login'>Login</Link>
          )}

        </Nav>
      </Container>
    </Navbar>
  );
}

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
