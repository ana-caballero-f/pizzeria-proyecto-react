import React from 'react';
import styles from './Phillosophy.module.css';



const Phillosophy = ({phillosohy}) =>(
    <div className={styles.Phillosophy}>
    <section className={styles.Text}>
    <div className={styles.TitlePhillosophy}>
        <h1>{phillosohy.title}</h1>
    </div>

    <div className={styles.SubtitlePhillosophy}>
        <h3>{phillosohy.subtitle}</h3>
    </div>

    <div className={styles.TextPhillosophy}>
    <p> En <span>Trattoria Vecchia Napoli</span> entendemos la cocina como una experiencia divertida, fácil y directa.
    Una auténtica carta diseñada para ti, para veganos, para amantes de la gastronomía, para intolerantes a la lactosa, para tu familia, 
    ¡per tutti con amore!</p><br/>
        <p>{phillosohy.story}</p>
    </div>
    </section>

    <section className={styles.Image}>
        <img src={phillosohy.image} alt='Foto platos'/>
    </section>


    </div>
);


export default Phillosophy