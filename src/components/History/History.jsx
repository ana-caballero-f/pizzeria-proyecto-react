import React from 'react';
import styles from './History.module.css';


const History = ({history}) =>(
<div className={styles.History}>

    <section className={styles.Parrafo}>
        <div className={styles.Title}>
        <h1>{history.title}</h1>
        </div>

        <div className={styles.Subtitle}>
        <h3>{history.subtitle}</h3>
        </div>

    <div className={styles.Text}>
        <p>{history.story1}</p> <br/>
        <p>{history.story2}</p>

    </div>
    </section>

    <section>
        <img src={history.image} alt='Foto restaurante'/>
    </section>


</div>
);


export default History
