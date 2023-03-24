import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeComponent.module.scss';

import { Link } from 'react-router-dom';


const HomeComponent = () => (
  <div className={styles.HomeComponent}>
    <div className={styles.Links}>
      <h1 className={styles.Name}>Trattoría Vecchia Napoli </h1>
      <Link className={styles.NavLink} to='/carta'>Carta</Link> 
      <Link className={styles.NavLink} to='/reservas'>Reservas & contacto</Link>
    </div>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;

