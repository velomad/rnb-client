import Axios from "axios";
import { GET_PRODUCTS_LOAD, GET_PRODUCTS_FETCH } from "../types";

export const getProducts = (website, category, page) => async (dispatch) => {
	dispatch({ type: GET_PRODUCTS_LOAD });
	try {
		const baseUrl = "https://reachnbuy.herokuapp.com";
		const URL = `${baseUrl}/api/v1/products/${website}?category=${category}&page=${page}&limit=20&api_key=${process.env.REACT_APP_DATASKORE_API_KEY}`;
		const resp = await Axios.get(URL);
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
