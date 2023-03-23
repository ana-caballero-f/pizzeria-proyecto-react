import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartaComponent.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { CARTA } from '../../CARTA/CARTA';

const { pizzas, pastas, postres, bebidas } = CARTA;

const CartaComponent = () => (
  <SimpleBar style={{ maxHeight: 500 }}>
  <div className={styles.CartaComponent}>
  
    <div className={styles.TitleCarta}>
      <h2>PIZZA FATTA A MANO </h2>
      <p>Si te gustan las pizzas, las nuestras te enamorarán</p>
      
    </div>

    <div className={styles.ContainerCarta}>
      {pizzas.map((item)=>{
        return(
          <div key={JSON.stringify(item)}>
            <p className={styles.Name}>{item.name}</p>
            <p className={styles.Ingredients}>{item.ingredients}</p>
            <p className={styles.Price}>{item.price}</p>
            
          </div>
        );
      })}
    </div>
    <div className={styles.TitleCarta}>
    <hr/>
      <h2>PASTA CASERECCIA </h2>
      <p>Nuestras pastas son artesanales y elaboradas en el día</p>
      
    </div>

    <div className={styles.ContainerCarta}>
      {pastas.map((item)=>{
        return(
          <div key={JSON.stringify(item)}>
            <p className={styles.Name}>{item.name}</p>
            <p className={styles.Ingredients}>{item.ingredients}</p>
            <p className={styles.Price}>{item.price}</p>
          </div>
        );
      })}
    </div>
    <div className={styles.TitleCarta}>
    <hr/>
      <h2>DOLCE FAR NIENTE </h2>
      <p>Ahora es el momento de dejarte llevar por nuestros postres</p>
     
    </div>

    <div className={styles.ContainerCarta}>
      {postres.map((item)=>{
        return(
          <div key={JSON.stringify(item)}>
            <p className={styles.Name}>{item.name}</p>
            <p className={styles.Ingredients}>{item.ingredients}</p>
            <p className={styles.Price}>{item.price}</p>
          </div>
        );
      })}
    </div>
    <div className={styles.TitleCarta}>
    <hr/>
      <h2>BEVANDE </h2>
      <p>Acompaña tus platos con nuestra selección de bebidas</p>
      
    </div>

    <div className={styles.ContainerCarta}>
      {bebidas.map((item)=>{
        return(
          <div key={JSON.stringify(item)}>
            <p className={styles.Name}>{item.name}</p>
            <p className={styles.Price}>{item.price}</p>
          </div>
        );
      })}
    </div>



    
  </div>
  </SimpleBar>
);

CartaComponent.propTypes = {};

CartaComponent.defaultProps = {};

export default CartaComponent;
