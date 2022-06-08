import { END_LOADING, FETCH_ALL_COMICS, START_LOADING } from "../constants/actionTypes";
import { fetchComics } from "../api";

export const getComics = () => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await fetchComics();
        dispatch({ type: FETCH_ALL_COMICS, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}