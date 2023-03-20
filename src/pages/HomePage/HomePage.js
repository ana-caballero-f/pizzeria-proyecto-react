import styles from './HomePage.module.scss';
import HomeComponent from '../../components/HomeComponent/HomeComponent'

export default function HomePage () {

    return (
        <div className={styles.HomePage}>
            <HomeComponent></HomeComponent>
            <h1>home page</h1>
        </div>
    )
}