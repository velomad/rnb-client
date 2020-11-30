import Axios from "axios";
import {
	FILTER_POPUP,
	SORT_POPUP,
	SEARCH_SLIDE,
	BACK_FROM_PRODUCT_DETAIL,
	SET_SIDEBAR,
	COMPARE_PRODUCT_POPUP,
	PRODUCT_SPECS_POPUP,
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

export const setSidebar = (value) => (dispatch) => {
	dispatch({ type: SET_SIDEBAR, payload: value });
};

export const setProductSpecsPopUp = (value) => (dispatch) => {
	dispatch({ type: PRODUCT_SPECS_POPUP, payload: value });
};
