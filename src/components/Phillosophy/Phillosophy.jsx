import React from 'react';
import styles from './Phillosophy.module.css';



const Phillosophy = ({phillosohy}) =>(
    <div className={styles.Phillosophy}>
        
        <section className={styles.Parrafo}>
            <div className={styles.Title}>
            <h1>{phillosohy.title}</h1>
            </div>

            <div className={styles.Subtitle}>
            <h3>{phillosohy.subtitle}</h3>
            </div>

            <div className={styles.Text}>
            
            <p>{phillosohy.story1}</p> <br/>
            <p>{phillosohy.story2}</p>
        </div>
    </section>

    <section>
        <img src={phillosohy.image} alt='Foto platos'/>
    </section>


    </div>
);


export default Phillosophy