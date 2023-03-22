import {
    GET_COMMENTS,
    GET_COMMENTS_OK,
    GET_COMMENTS_FAIL
} from './actionTypes'

const initialState = {
    commments: [],
    loadingComments: false,
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
            state = {...state, loadingComments: false, commments: action.payload}
            break

        case GET_COMMENTS_FAIL:
            state = {...state, loadingComments: false, error: {message: action.payload}}
            break

        default:
            break
    }
    return state
}