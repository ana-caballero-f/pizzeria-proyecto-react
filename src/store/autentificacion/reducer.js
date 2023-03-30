import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL
} from "./actionTypes"

const initialState = {
    loadingLogin: false, /* en principio, el loading es false */
    user: {},               /* el user (nombre y contraseña) está vacío */
    error: {                /* y no hay mensaje de error */
        message: ""
    }
}

export default function AutenReducer(state = initialState, action) {
    switch (action.type) {
        case DO_LOGIN:
            state = {...state, loadingLogin: true}
            break

        case DO_LOGIN_OK:
            state = {...state, loadingLogin: false, user: action.payload}
            break

        case DO_LOGIN_FAIL:
            state = { ...state, loadingLogin: false, user: {}}
            break
        default:
                break
    }
    return state   /* devuelve el state que sea */
}