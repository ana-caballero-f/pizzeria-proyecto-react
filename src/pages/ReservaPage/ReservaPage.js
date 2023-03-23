import styles from './ReservaPage.module.scss';
import ReservasComponent from '../../components/ReservasComponent/ReservasComponent'


export default function ReservaPage () {

    return (
        <div className={styles.ReservaPage}>
            <ReservasComponent></ReservasComponent>
        </div>
    )
}