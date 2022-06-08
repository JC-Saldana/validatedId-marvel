
import { END_LOADING, FETCH_BY_ID, FETCH_BY_PAGE, START_LOADING } from "../constants/actionTypes"

const charactersReducer = (state = { isLoading: true, characters: [] }, action: any) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_BY_ID:
            return { ...state, characters: action.payload.data }
        case FETCH_BY_PAGE:
            return { ...state, characters: action.payload.data }
        default:
            return state
    }
}

export default charactersReducer