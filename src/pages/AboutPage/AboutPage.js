import styles from './AboutPage.module.scss';
import AboutComponent from '../../components/AboutComponent/AboutComponent'

export default function AboutPage () {

    return (
        <div className={styles.AboutPage}>
            <AboutComponent></AboutComponent>
            <h1>About Page</h1>
        </div>
    )
}