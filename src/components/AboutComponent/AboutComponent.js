import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AboutComponent.module.scss';
import { INFO } from '../../INFO/INFO';
import Phillosophy from '../Phillosophy/Phillosophy';
import History from '../History/History';

const { history, phillosophy } = INFO;

function AboutComponent () { 
  const [showHistory, setShowHistory]=useState(true);

  return( 

  <div className={styles.AboutComponent}>
    <h1 className={styles.TitleAbout}>SOBRE NOSOTROS</h1>
    <p><span>Trattoria Vecchia Napoli</span> es una parte de Italia en pleno centro de Sevilla.</p>
    <p>Nuestra oferta gastronómica, netamente italiana, se caracteriza por el profundo respeto a la materia prima.
    El cliente vivirá un recorrido gastronómico sensible y contemporáneo del norte al sur de Italia. </p> <br/>



    <p>Situado en la calle Reyes Católicos, nº 25, en pleno centro de Sevilla, en un edificio emblemático junto al Puente de Triana y el río Guadalquivir. 
    Este nuevo local cuenta con 200m² y una gran terraza que ocupa toda la esquina de Reyes Católicos y Paseo de Colón. 
    Su interior está diseñado para ser un espacio único que quiere ser al mismo tiempo acogedor y diferente.</p> <br/>

    <p> En <span>Trattoria Vecchia Napoli</span> entendemos la cocina como una experiencia divertida, fácil y directa.
            Una auténtica carta diseñada para ti, para veganos, para amantes de la gastronomía, para intolerantes a la lactosa, para tu familia, 
            ¡per tutti con amore!</p><br/>
    

  <div className={styles.ContainerBtn}>
    <button className={styles.CustomBtnHistory} onClick = {()=>setShowHistory(true)}>Nuestra historia</button>
    <button className={styles.CustomBtn} onClick = {()=>setShowHistory(false)}>Nuestra filosofía</button>
  </div>

  <div>
    {showHistory ? (<History history={history}/>) : (<Phillosophy phillosohy={phillosophy}/>)}

  </div>






  </div>
)
};
AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
