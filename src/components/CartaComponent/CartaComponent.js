import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartaComponent.module.scss';

import { CARTA } from '../../CARTA/CARTA';

const { pizzas, pastas, postres, bebidas } = CARTA;

const CartaComponent = () => (
  <div className={styles.CartaComponent}>
  <h1>hola ana</h1>

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



    
  </div>
);

CartaComponent.propTypes = {};

CartaComponent.defaultProps = {};

export default CartaComponent;
