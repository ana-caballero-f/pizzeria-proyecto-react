import { combineReducers } from "redux";
import ComentariosReducer from "./comentarios/reducer"
// import AuthReducer from "./autentificacion/reducer";

const rootReducer = combineReducers({
    ComentariosReducer,
    // AuthReducer
})

export default rootReducer