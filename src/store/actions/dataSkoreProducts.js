import Axios from "axios";
import { history } from "../../utils";

import {
	GET_PRODUCTS_LOAD,
	GET_PRODUCTS_FETCH,
	SET_PRODUCT_CATEGORY_CHANGE,
} from "../types";

export const getProducts = (page) => async (dispatch) => {
	dispatch({ type: GET_PRODUCTS_LOAD });
	try {
		const baseUrl = "https://reachnbuy.com";

		var URL = history.location.pathname + history.location.search;

		console.log("URL", URL);
		const API_URL = `${baseUrl}/api/v1${URL}&page=${page}&limit=30&api_key=${process.env.REACT_APP_DATASKORE_API_KEY}`;
		console.log("API_URL", API_URL);

		const resp = await Axios.get(API_URL);
		dispatch({
			type: GET_PRODUCTS_FETCH,
			payload: resp.data.data.result,
			totalProducts: resp.data.totalProducts,
			category: resp.data.category,
		});
	} catch (err) {
		console.log(err);
	}
};

export const setProductCategoryChange = () => (dispatch) => {
	dispatch({ type: SET_PRODUCT_CATEGORY_CHANGE });
};
