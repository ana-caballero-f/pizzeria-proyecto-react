import {
    GET_COMMENTS,
    GET_COMMENTS_OK,
    GET_COMMENTS_FAIL,

    GET_SINGLE_COMMENT,
    GET_SINGLE_COMMENT_OK,
    GET_SINGLE_COMMENT_FAIL
} from './actionTypes'

const initialState = {
    comments: [],
    loadingComments: false,
    comment: {},
    loadingSingleComment: false,
    error: {
        message: ""
    }
}

export default function ComentariosReducer(state = initialState, action) {
    switch(action.type) {
        case GET_COMMENTS:
            state = {...state, loadingComments: true}
            break

        case GET_COMMENTS_OK:
            state = {...state, loadingComments: false, comments: action.payload}
            break

        case GET_COMMENTS_FAIL:
            state = {...state, loadingComments: false, error: {message: action.payload}}
            break

      
            
        case GET_SINGLE_COMMENT:
            state = {...state, loadingSingleComment: true}
            break

        case GET_SINGLE_COMMENT_OK:
            state = {... state, loadingSingleComment: false, comment: action.payload}
            break

        case GET_SINGLE_COMMENT_FAIL:
            state = {... state, loadingSingleComment: false, comment: {}, error: {message: action.payload}}
            break
       
        default:
            break
        
    }
    return state
}