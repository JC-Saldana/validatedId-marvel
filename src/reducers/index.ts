import charactersReducer from "./characters";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    characters: charactersReducer
})

export default allReducers