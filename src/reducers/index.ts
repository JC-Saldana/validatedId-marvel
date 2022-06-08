import charactersReducer from "./characters";
import { combineReducers } from "redux";
import comicsReducer from "./comics";

const allReducers = combineReducers({
    characters: charactersReducer,
    comics: comicsReducer
})

export default allReducers