import React from 'react';
import PropTypes from 'prop-types';
import styles from './LogoComponent.module.scss';

import ImagenLogo from "../../assets/images/logo.jpg"

const LogoComponent = () => (
  <div className={styles.LogoComponent}>
    LogoComponent Component
    {/* <img src={ImagenLogo}></img> */}
  </div>
);

LogoComponent.propTypes = {};

LogoComponent.defaultProps = {};

export default LogoComponent;
