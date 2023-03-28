import styles from './CommentPage.module.scss';
import CommentComponent from '../../components/CommentComponent/CommentComponent'
import { useParams } from 'react-router';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSingleComment } from "../../store/comentarios/actions";


export default function CommentPage () {
    
    const params = useParams()

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSingleComment(params.id))
    },[])

    return (
        <div className={styles.CommentPage}>
          <CommentComponent></CommentComponent>
        </div>
    )
}