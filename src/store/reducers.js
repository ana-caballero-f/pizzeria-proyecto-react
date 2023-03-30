import { combineReducers } from "redux";

import ComentariosReducer from "./comentarios/reducer"
import AutenReducer from "./autentificacion/reducer";


const rootReducer = combineReducers({
    ComentariosReducer,
    AutenReducer
})

export default rootReducer