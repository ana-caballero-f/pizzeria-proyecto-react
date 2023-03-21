import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeComponent.module.scss';

import { Link } from 'react-router-dom';


const HomeComponent = () => (
  <div className={styles.HomeComponent}>
   <button><Link className={styles.NavLink} to='/carta'>Carta</Link> </button>
   <button><Link className={styles.NavLink} to='/reservas'>Reservas & contacto</Link></button>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;

