import {
	FILTER_POPUP,
	SORT_POPUP,
	SEARCH_SLIDE,
	BACK_FROM_PRODUCT_DETAIL,
	COMPARE_PRODUCT_SLIDE,
	COMPARE_PRODUCT_LOAD,
	COMPARE_PRODUCT_FETCH,
} from "../types";

const initialState = {
	isFilter: false,
	isSort: false,
	isSearchSlide: false,
	isBackFromProductDetail: false,
	isCompare: false,
	comparisonProductDetail: {},
	comparisonProductDetailLoading: true,
};

const ui = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FILTER_POPUP:
			return {
				...state,
				isFilter: payload,
			};
		case SORT_POPUP:
			return {
				...state,
				isSort: payload,
			};
		case SEARCH_SLIDE:
			return {
				...state,
				isSearchSlide: payload,
			};
		case BACK_FROM_PRODUCT_DETAIL:
			return {
				...state,
				isBackFromProductDetail: payload,
			};
		case COMPARE_PRODUCT_SLIDE:
			return {
				...state,
				isCompare: payload,
			};
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
			};
		default:
			return state;
	}
};

export default ui;
