import styles from './CommentPage.module.scss';
import CommentComponent from '../../components/CommentComponent/CommentComponent'
export default function CommentPage () {

    return (
        <div className={styles.CommentPage}>
            <CommentComponent></CommentComponent>
           <h1>Comentario individual</h1>
        </div>
    )
}