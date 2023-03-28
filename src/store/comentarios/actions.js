import axios from 'axios'
import {
    GET_COMMENTS,
    GET_COMMENTS_OK,
    GET_COMMENTS_FAIL,

    GET_SINGLE_COMMENT,
    GET_SINGLE_COMMENT_OK,
    GET_SINGLE_COMMENT_FAIL
} from './actionTypes'


/* una función por cada tipo de acción de Comments */  

export function actionGetComments() {
    return{
        type: GET_COMMENTS
    }
}

export function actionGetCommentsOk(comments) {
    return{
        type: GET_COMMENTS_OK,
        payload: comments
        }
}

export function actionGetCommentsFail(error) {
    return{
        type: GET_COMMENTS_FAIL,
        payload: error
        }
}

/* la función que hace la llamada a la API Y ejecuta las tres */
export function getComments() {
    return async (dispatch)=>{
        dispatch(actionGetComments())
        try{
            // const response = await axios.get("GET https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews")
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
            dispatch(actionGetCommentsOk(response.data))
        }catch(error) {
            dispatch(actionGetCommentsFail(error))
        }
    }
}

/* ===================================================================================== */


/* función por cada tipo de acción de mostrar un solo comentario */

export function actionGetSingleComment(idComment) {
    return{
        type: GET_SINGLE_COMMENT,
        payload: idComment
    }
}

export function actionGetSingleCommentOk(comment) {
    return{
        type: GET_SINGLE_COMMENT_OK,
        payload: comment
        }
}

export function actionGetSingleCommentFail(error) {
    return{
        type: GET_SINGLE_COMMENT_FAIL,
        payload: error
        }
}



export function getSingleComment(idComment) {
    return async (dispatch)=>{
        dispatch(actionGetSingleComment(idComment))
        try{
            // const response = await axios.get("GET https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews")
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${idComment}`)
            dispatch(actionGetSingleCommentOk(response.data))
        }catch(error) {
            dispatch(actionGetSingleCommentFail(error))
        }
    }
}