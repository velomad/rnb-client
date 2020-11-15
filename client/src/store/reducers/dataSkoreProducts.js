import { AssignmentReturnRounded } from "@material-ui/icons";
import {
	GET_PRODUCTS_LOAD,
	GET_PRODUCTS_FETCH,
	SET_PRODUCT_CATEGORY_CHANGE,
	RESET_PRODUCTS
} from "../types";

const initialState = {
	products: [],
	category: "",
	totalProducts: "",
	productsLoading: false,
};

const isProductsLoading = (state) => {
	return {
		...state,
		productsLoading: true,
	};
};

const getProducts = (state, payload, totalProducts, category) => {
	const newData = state.products.concat(payload);

	return {
		...state,
		products: newData,
		totalProducts,
		category,
	};
};

const categoryChange = (state) => {
	return {
		...state,
		products: [],
	};
};

const resetProducts = (state) => {
	return {
		...state,
		products: [],
	};
};

const dataSkoreProducts = (state = initialState, actions) => {
	const { type, payload, totalProducts, category } = actions;
	switch (type) {
		case GET_PRODUCTS_LOAD:
			return isProductsLoading(state);
		case GET_PRODUCTS_FETCH:
			return getProducts(state, payload, totalProducts, category);
		case SET_PRODUCT_CATEGORY_CHANGE:
			return categoryChange(state);
		case RESET_PRODUCTS:
				return resetProducts(state);
		default:
			return state;
	}
};

export default dataSkoreProducts;
