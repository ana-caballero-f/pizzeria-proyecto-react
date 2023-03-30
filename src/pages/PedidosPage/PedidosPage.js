import { useSelector } from 'react-redux';
import styles from './PedidosPage.module.scss';


export default function PedidosPage() {

        const {user} = useSelector((state)=> state.AutenReducer)
    return(
    <div  className={styles.PedidosPage}>
        <h2 className={styles.TextW}>Bienvenid@ {user.firstName}</h2> 
        <p className={styles.TextWP}>Ya puedes hacer tu pedido</p>
    </div>
    )
}