import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeComponent.module.scss';

import { Link } from 'react-router-dom';


const HomeComponent = () => (
  <div className={styles.HomeComponent}>
    <h1 className={styles.Name}>Trattoría Vecchia Napoli </h1>
      <div className={styles.HomeLinks}>
        <Link className={styles.HomeNavLink} to='/carta'>Carta</Link> 
        <Link className={styles.HomeNavLink} to='/reservas'>Reservas & contacto</Link>
      </div>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;

