import styles from './LoginPage.module.scss';
import LoginComponent from '../../components/LoginComponent/LoginComponent'


export default function LoginPage () {

    return (
        <div className={styles.LoginPage}>
          <h1>Regístrate y haz tu pedido</h1>
          <LoginComponent></LoginComponent>      

        </div>
    )
}