import axios from 'axios'
import {
    GET_COMMENTS,
    GET_COMMENTS_OK,
    GET_COMMENTS_FAIL
} from './actionTypes'


/* una función por cada tipo de acción */  

export function actionGetComments () {
    return{
        type: GET_COMMENTS
    }
}

export function actionGetCommentsOk (comments) {
    return{
        type: GET_COMMENTS_OK,
        payload: comments
        }
}

export function actionGetCommentsFail (error) {
    return{
        type: GET_COMMENTS_FAIL,
        payload: error
        }
}

/* la función que hace la llamada a la API Y ejecuta las tres */
export function getComments () {
    return async (dispatch) => {
        dispatch(actionGetComments())
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
            dispatch(actionGetCommentsOk(response.data))
        }catch(error) {
            dispatch(actionGetCommentsFail(error))
        }
    }
}