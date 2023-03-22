import { combineReducers } from "redux";
import CommentsReducer from "./comentarios/reducer"
// import AuthReducer from "./autentificacion/reducer";

const rootReducer = combineReducers({
    CommentsReducer,
    // AuthReducer
})

export default rootReducer