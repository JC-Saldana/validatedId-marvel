import { END_LOADING, FETCH_BY_ID, FETCH_BY_PAGE, START_LOADING } from "../constants/actionTypes";
import { fetchCharacterById, fetchCharactersByPage } from "../api";

export const getCharacterById = (id: number) => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await fetchCharacterById(id);
        dispatch({ type: FETCH_BY_ID, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getCharactersByPage = (params: any) => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await fetchCharactersByPage(params);
        dispatch({ type: FETCH_BY_PAGE, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}