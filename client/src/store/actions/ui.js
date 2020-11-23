import Axios from "axios";
import {
	FILTER_POPUP,
	SORT_POPUP,
	SEARCH_SLIDE,
	BACK_FROM_PRODUCT_DETAIL,
	COMPARE_PRODUCT_SLIDE,
	COMPARE_PRODUCT_LOAD,
	COMPARE_PRODUCT_FETCH,
} from "../types";

export const setFilterPopUpAction = (value) => (dispatch) => {
	dispatch({ type: FILTER_POPUP, payload: value });
};

export const setSortPopUpAction = (value) => (dispatch) => {
	dispatch({ type: SORT_POPUP, payload: value });
};

export const setSearchSlide = (value) => (dispatch) => {
	dispatch({ type: SEARCH_SLIDE, payload: value });
};

export const setBackFromSearch = (value) => (dispatch) => {
	dispatch({ type: BACK_FROM_PRODUCT_DETAIL, payload: value });
};

export const setCompareProduct = (value, productId) => async (dispatch) => {
	dispatch({ type: COMPARE_PRODUCT_SLIDE, payload: value });
	dispatch({ type: COMPARE_PRODUCT_LOAD });
	try {
		const response = await Axios.get(
			`https://price-api.datayuge.com/api/v1/compare/detail?api_key=${process.env.REACT_APP_DATAYUGE_API_KEY}&id=${productId}`,
		);
		console.log("response from action", response.data.data);
		dispatch({ type: COMPARE_PRODUCT_FETCH, payload: response.data.data });
	} catch (err) {
		console.log(err);
	}
};
