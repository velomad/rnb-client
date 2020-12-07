import Axios from "axios";
import { history } from "../../utils";

import {
	GET_PRODUCTS_LOAD,
	GET_PRODUCTS_FETCH,
	SET_PRODUCT_CATEGORY_CHANGE,
	RESET_PRODUCTS,
} from "../types";

export const getProducts = (page) => async (dispatch) => {
	dispatch({ type: GET_PRODUCTS_LOAD });
	try {
		const baseUrl = "https://reachnbuy.com";
		var URL;

		// if (history.location.pathname.slice(1) === "search") {
		// URL = history.location.pathname + history.location.search;
		// } else {
		URL = history.location.pathname + history.location.search;
		// }

		history.listen(() => {
			return;
		});
		const API_URL = `${baseUrl}/api/v1${URL}&page=${page}&limit=30&api_key=${process.env.REACT_APP_DATASKORE_API_KEY}`;

		const resp = await Axios.get(API_URL);
		console.log(resp);
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

export const setResetProducts = () => (dispatch) => {
	dispatch({ type: RESET_PRODUCTS });
};
