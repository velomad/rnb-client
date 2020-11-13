import Axios from "axios";
import { GET_SUGGESTIONS_LOAD, GET_SUGGESTIONS_FETCH } from "../types";

export const getSuggestions = (searchQuery) => async (dispatch) => {
	dispatch({ type: GET_SUGGESTIONS_LOAD });
	try {
		
		const baseUrl = "https://reachnbuy.com"
		const URL = `${baseUrl}/api/v1/search?term=${searchQuery}&api_key=${process.env.REACT_APP_DATASKORE_API_KEY}`;
		const resp = await Axios.get(URL);
		dispatch({ type: GET_SUGGESTIONS_FETCH, payload: resp.data.suggestions });
	} catch (err) {
		console.log(err);
	}
};
