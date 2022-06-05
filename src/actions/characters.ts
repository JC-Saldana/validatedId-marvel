import { fetchCharacters } from "../api";
import { END_LOADING, FETCH_ALL_CHARACTERS, START_LOADING } from "../constants/actionTypes";

export const getCharactersByPage = (params: any) => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await fetchCharacters(params);
        dispatch({ type: FETCH_ALL_CHARACTERS, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}