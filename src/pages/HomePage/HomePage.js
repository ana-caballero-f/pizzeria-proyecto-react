
import styles from './HomePage.module.scss';

import HomeComponent from '../../components/HomeComponent/HomeComponent';

import PizzaFoto from "../../assets/images/pizza.jpg";

export default function HomePage () {

    return (
        <div className={styles.HomePage}>
            {/* <img className={styles.Image} src={PizzaFoto} alt="foto pizza"></img> */}
            <HomeComponent></HomeComponent>
        </div>
    )
}