import styles from './LoginPage.module.scss';
import LoginComponent from '../../components/LoginComponent/LoginComponent'
export default function LoginPage () {

    return (
        <div className={styles.LoginPage}>
          <LoginComponent></LoginComponent>
          <h1>Login Page</h1>

        </div>
    )
}