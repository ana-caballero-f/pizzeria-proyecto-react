import styles from './MultiCommentPage.module.scss';
import MultiCommentsComponent from '../../components/MultiCommentsComponent/MultiCommentsComponent'
export default function MultiCommentPage () {

    return (
        <div className={styles.MultiCommentPage}>
           <h1 className={styles.TitlePage}>Opiniones de nuestros clientes:</h1>
           <MultiCommentsComponent></MultiCommentsComponent>
        </div>
    )
}