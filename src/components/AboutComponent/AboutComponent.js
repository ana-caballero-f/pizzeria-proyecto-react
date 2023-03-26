import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutComponent.module.scss';

const AboutComponent = () => (
  <div className={styles.AboutComponent}>
    <h1 className={styles.TitleAbout}>SOBRE NOSOTROS</h1>
    <p><span>Trattoria Vecchia Napoli</span> es una parte de Italia en pleno centro de Madrid.</p>
    <p>Nuestra oferta gastronómica, netamente italiana, se caracteriza por el profundo respeto a la materia prima.
    El cliente vivirá un recorrido gastronómico sensible y contemporáneo del norte al sur de Italia. </p> <br/>

    <p> En <span>Trattoria Vecchia Napoli</span> entendemos la cocina como una experiencia divertida, fácil y directa.
    Una auténtica carta diseñada para ti, para veganos, para amantes de la gastronomía, para intolerantes a la lactosa, para tu familia, 
    ¡per tutti con amore!</p><br/>

    <p> I capi della cucina, Gianluca & Emanuele, apuestan por sabores auténticos y tradicionales. Todo lo que sale de su cocina es 
    absolutamente casero y se elabora con materia prima 100% autóctona de primera calidad.
    En la carta de Bachio no faltan las mejores pastas frescas, pizzas de autor, dejando hueco para nuestros dolce far niente.</p>







  </div>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
