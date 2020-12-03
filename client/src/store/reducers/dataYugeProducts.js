import { initial } from "lodash";
import {
	GET_ELECTRONIC_PRODUCTS_LOAD,
	GET_ELECTRONIC_PRODUCTS_FETCH,
	RESET_ELECTRONIC_PRODUCTS,
	SET_ELECTORNIC_PRODUCT_CATEGORY_CHANGE,
	COMPARE_PRODUCT_LOAD,
	COMPARE_PRODUCT_FETCH,
	PRODUCT_SPECS_LOAD,
	PRODUCT_SPECS_FETCH,
	COMPARE_PRODUCT_ERROR,
} from "../types";

const initialState = {
	electronicProductsLoading: false,
	electronicProducts: [],
	filters: [],
	endOfResults: false,
	comparisonProductDetail: {},
	comparisonProductDetailLoading: true,
	productSpecsLoading: false,
	productSpecs: [],
	errorCode: "",
};

const getProductsLoading = (state) => {
	return {
		...state,
		electronicProductsLoading: true,
	};
};

const getProducts = (state, payload, filters) => {
	let newProductsData = [];
	let results = false;

	if (payload !== "end of results") {
		newProductsData = [...state.electronicProducts, ...payload];
	} else {
		results = true;
		newProductsData = state.electronicProducts;
	}

	return {
		...state,
		electronicProducts: newProductsData,
		filters: filters,
		electronicProductsLoading: false,
		endOfResults: results,
	};
};
const setResetProducts = (state) => {
	return {
		...state,
		electronicProducts: [],
	};
};

const dataYugeProducts = (state = initialState, action) => {
	const { type, payload, filters } = action;
	switch (type) {
		case GET_ELECTRONIC_PRODUCTS_LOAD:
			return getProductsLoading(state);
		case GET_ELECTRONIC_PRODUCTS_FETCH:
			return getProducts(state, payload, filters);
		case RESET_ELECTRONIC_PRODUCTS:
			return setResetProducts(state);
		case COMPARE_PRODUCT_LOAD:
			return {
				...state,
				comparisonProductDetailLoading: true,
			};
		case COMPARE_PRODUCT_FETCH:
			return {
				...state,
				comparisonProductDetailLoading: false,
				comparisonProductDetail: payload,
				errorCode: "",
			};
		case PRODUCT_SPECS_LOAD:
			return {
				...state,
				productSpecsLoading: true,
			};
		case PRODUCT_SPECS_FETCH:
			return {
				...state,
				productSpecsLoading: false,
				productSpecs: payload,
			};
		case COMPARE_PRODUCT_ERROR:
			return {
				...state,
				comparisonProductDetailLoading: false,
				errorCode: payload,
			};
		default:
			return state;
	}
};

export default dataYugeProducts;
