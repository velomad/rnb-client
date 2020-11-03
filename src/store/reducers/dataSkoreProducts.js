import { GET_PRODUCTS_LOAD, GET_PRODUCTS_FETCH } from "../types";

const initialState = {
	products: [],
	category : "",
	totalProducts : "",
	productsLoading: false,
};

const isProductsLoading = (state) => {
	return {
		...state,
		productsLoading: true,
	};
};

const getProducts = (state, payload, totalProducts, category) => {
	return {
		...state,
		products: payload,
		totalProducts,
		category
	};
};

const dataSkoreProducts = (state = initialState, actions) => {
	const { type, payload, totalProducts, category } = actions;
	switch (type) {
		case GET_PRODUCTS_LOAD:
			return isProductsLoading(state);
		case GET_PRODUCTS_FETCH:
			return getProducts(state, payload, totalProducts, category);
		default:
			return state;
	}
};

export default dataSkoreProducts;
