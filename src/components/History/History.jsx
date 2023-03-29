import React from 'react';
import styles from './History.module.css';


const History = ({history}) =>(
    <div className={styles.History}>
    <section className={styles.Text}>
    <div className={styles.TitleHistory}>
        <h1>{history.title}</h1>
    </div>

    <div className={styles.SubtitleHistory}>
        <h3>{history.subtitle}</h3>
    </div>

    <div className={styles.TextHistory}>
        <p>{history.story}</p>
    </div>
    </section>

    <section className={styles.Image}>
        <img src={history.image} alt='Foto restaurante'/>
    </section>


    </div>
);


export default History
