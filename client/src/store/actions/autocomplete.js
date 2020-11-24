import Axios from "axios";
import { GET_SUGGESTIONS_LOAD, GET_SUGGESTIONS_FETCH } from "../types";

export const getSuggestions = (searchQuery, category) => async (dispatch) => {
	dispatch({ type: GET_SUGGESTIONS_LOAD });
	try {
		console.log(category);
		let URL;

		const baseUrl = "https://reachnbuy.com";
		const baseUrlDataYuge = "https://price-api.datayuge.com";

		category === "electronic"
			? (URL = `${baseUrlDataYuge}/api/v1/compare/search/suggest?api_key=${process.env.REACT_APP_DATAYUGE_API_KEY}&product=${searchQuery}`)
			: (URL = `${baseUrl}/api/v1/search?term=${searchQuery}&api_key=${process.env.REACT_APP_DATASKORE_API_KEY}`);

		const resp = await Axios.get(URL);
		console.log(resp.data.keywords)
		dispatch({
			type: GET_SUGGESTIONS_FETCH,
			payload:
				category === "electronic" ? resp.data.keywords : resp.data.suggestions,
		});
	} catch (err) {
		console.log(err);
	}
};
