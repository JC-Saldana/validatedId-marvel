
import { END_LOADING, FETCH_ALL_COMICS, START_LOADING } from "../constants/actionTypes"

 const comicsReducer = (state = { isLoading: true, comics: [] }, action: any) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_ALL_COMICS:
            return { ...state, comics: action.payload.data }
        default:
            return state
    }
}

export default comicsReducer