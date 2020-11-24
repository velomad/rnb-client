import { initial } from "lodash";
import {
	GET_ELECTRONIC_PRODUCTS_LOAD,
	GET_ELECTRONIC_PRODUCTS_FETCH,
	RESET_ELECTRONIC_PRODUCTS,
	SET_ELECTORNIC_PRODUCT_CATEGORY_CHANGE,
} from "../types";

const initialState = {
	electronicProductsLoading: false,
	electronicProducts: [],
};

const getProductsLoading = (state) => {
	return {
		...state,
		electronicProductsLoading: true,
	};
};

const getProducts = (state, payload) => {
	const newProductsData = [...state.electronicProducts, ...payload];

	return {
		...state,
		electronicProducts: newProductsData,
	};
};

const dataYugeProducts = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_ELECTRONIC_PRODUCTS_LOAD:
			return getProductsLoading(state);
		case GET_ELECTRONIC_PRODUCTS_FETCH:
			return getProducts(state, payload);
		default:
			return state;
	}
};

export default dataYugeProducts;
