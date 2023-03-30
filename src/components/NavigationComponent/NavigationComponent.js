import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationComponent.module.scss';
import ImagenLogo from "../../assets/images/logoPeq.jpg"


import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationComponent = () => {
  return (

    
      <div className={styles.NavBar}> 
        <div className={styles.ImgNav}> 
        <img src={ImagenLogo} alt="Logo"/>
        </div>
      

        
          <Nav>
            <Link className={styles.NavigationNavLink} to='/'>Inicio</Link>
            <Link className={styles.NavigationNavLink} to='/carta'>Carta</Link>          
            <Link className={styles.NavigationNavLink} to='/about'>Sobre nosotros</Link>          
            <Link className={styles.NavigationNavLink} to='/reservas'>Reservas & contacto</Link>          
            <Link className={styles.NavigationNavLink} to='/comments'>Comentarios</Link>
            <Link className={styles.NavigationNavLink} to='/login'>Login</Link>
            <Link className={styles.NavigationNavLink} to= '/pedidos'>Pedidos</Link>
          </Nav>

      </div>
      
    

  );
}

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
