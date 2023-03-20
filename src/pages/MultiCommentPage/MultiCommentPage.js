import styles from './MultiCommentPage.module.scss';
import MultiCommentComponent from '../../components/MultiCommentsComponent/MultiCommentsComponent'
export default function MultiCommentPage () {

    return (
        <div className={styles.MultiCommentPage}>
            <MultiCommentComponent></MultiCommentComponent>
           <h1>multi comentarios page</h1>
        </div>
    )
}