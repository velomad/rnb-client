import {
	FILTER_POPUP,
	SORT_POPUP,
	SEARCH_SLIDE,
	BACK_FROM_PRODUCT_DETAIL,
	SET_SIDEBAR,
	PRODUCT_SPECS_POPUP,
	SET_APPLIED_FILTERS,
} from "../types";

const initialState = {
	isFilter: false,
	isSort: false,
	isSearchSlide: false,
	isBackFromProductDetail: false,
	isSidebar: false,
	isProductSpecsPopUp: false,
	appliedFilters: [],
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
		case SET_SIDEBAR:
			return {
				...state,
				isSidebar: payload,
			};
		case PRODUCT_SPECS_POPUP:
			return {
				...state,
				isProductSpecsPopUp: payload,
			};
		case SET_APPLIED_FILTERS:
			return {
				...state,
				appliedFilters: payload,
				...state.appliedFilters,
			};
		default:
			return state;
	}
};

export default ui;
