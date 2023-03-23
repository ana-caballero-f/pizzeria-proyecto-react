import styles from './MultiCommentPage.module.scss';
import MultiCommentsComponent from '../../components/MultiCommentsComponent/MultiCommentsComponent'
export default function MultiCommentPage () {

    return (
        <div className={styles.MultiCommentPage}>
           <h1>Comentarios page</h1>
           <MultiCommentsComponent></MultiCommentsComponent>
        </div>
    )
}