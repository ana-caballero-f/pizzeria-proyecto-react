import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL
} from "./actionTypes"

import axios from "axios"



export function actionDoLogin(loginData) {
    return {
        type: DO_LOGIN,
        payload: loginData
    }
}

export function actionDoLoginOk(userDetails) {
    return {
        type: DO_LOGIN_OK,
        payload: userDetails
    }
}

export function actionDoLoginFail(error) {
    return {
        type: DO_LOGIN_FAIL,
        payload: error
    }
}

export function doLogin(userData) {
    return async(dispatch) => {
        try{
            dispatch(actionDoLogin(userData))
            const response = await axios.post("https://dummyjson.com/auth/login", userData)
            dispatch(actionDoLoginOk(response.data))
        }catch (error) {
            dispatch(actionDoLoginFail(error))
        }
    }
}