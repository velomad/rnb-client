import Axios from "axios";
import { history } from "../../utils";
import qs from "querystring";

import {
	GET_ELECTRONIC_PRODUCTS_LOAD,
	GET_ELECTRONIC_PRODUCTS_FETCH,
	SET_ELECTORNIC_PRODUCT_CATEGORY_CHANGE,
	RESET_ELECTRONIC_PRODUCTS,
	COMPARE_PRODUCT_LOAD,
	COMPARE_PRODUCT_FETCH,
	PRODUCT_SPECS_LOAD,
	PRODUCT_SPECS_FETCH,
	COMPARE_PRODUCT_ERROR,
} from "../types";

export const getElectronicProducts = (page) => async (dispatch) => {
	dispatch({ type: GET_ELECTRONIC_PRODUCTS_LOAD });
	try {
		const baseUrl = "https://price-api.datayuge.com";

		const searchTerm = qs.parse(history.location.search.slice(1)).product;
		var isQueryParam = "product" in qs.parse(history.location.search.slice(1));
		let API_URL;
		let API_URL_2;
		history.listen(() => {
			return;
		});

		if (isQueryParam) {
			API_URL = `${baseUrl}/api/v1/compare/search?api_key=${process.env.REACT_APP_DATAYUGE_API_KEY}&product=${searchTerm}&page=${page}`;
			const response = await Axios.get(API_URL);
			dispatch({
				type: GET_ELECTRONIC_PRODUCTS_FETCH,
				payload: response.data.data,
			});
		} else {
			API_URL = `${baseUrl}/api/v1/compare/list${history.location.search}&api_key=${process.env.REACT_APP_DATAYUGE_API_KEY}&can_compare=1&page=${page}`;
			API_URL_2 = `${baseUrl}/api/v1/compare/list/filters${history.location.search}&api_key=${process.env.REACT_APP_DATAYUGE_API_KEY}`;

			const promise1 = Axios.get(API_URL);
			const promise2 = Axios.get(API_URL_2);
			Promise.all([promise1, promise2]).then(function (values) {
				console.log(values[0].data.data);
				dispatch({
					type: GET_ELECTRONIC_PRODUCTS_FETCH,
					payload: values[0].data.data,
					filters: values[1].data.filters,
				});
			});
		}
	} catch (err) {
		console.log(err);
	}
};

export const setResetElectronicProducts = () => (dispatch) => {
	dispatch({ type: RESET_ELECTRONIC_PRODUCTS });
};

export const setCompareProduct = (productId) => async (dispatch) => {
	dispatch({ type: COMPARE_PRODUCT_LOAD });
	try {
		const response = await Axios.get(
			`https://price-api.datayuge.com/api/v1/compare/detail?api_key=${process.env.REACT_APP_DATAYUGE_API_KEY}&id=${productId}`,
		);
		console.log("response from action", response.data.data);
		dispatch({ type: COMPARE_PRODUCT_FETCH, payload: response.data.data });
	} catch (err) {
		console.log(err.response.data.error_code);
		dispatch({
			type: COMPARE_PRODUCT_ERROR,
			payload: err.response.data.error_code,
		});
	}
};

export const getProductSpecs = (productId) => async (dispatch) => {
	dispatch({ type: PRODUCT_SPECS_LOAD });
	try {
		const response = await Axios.get(
			`https://price-api.datayuge.com/api/v1/compare/specs?api_key=${process.env.REACT_APP_DATAYUGE_API_KEY}&id=${productId}`,
		);
		dispatch({ type: PRODUCT_SPECS_FETCH, payload: response.data.data });
	} catch (err) {
		console.log(err);
	}
};
