import { FILTER_POPUP, SORT_POPUP, SEARCH_SLIDE } from "../types";

export const setFilterPopUpAction = (value) => (dispatch) => {
	dispatch({ type: FILTER_POPUP, payload: value });
};

export const setSortPopUpAction = (value) => (dispatch) => {
	dispatch({ type: SORT_POPUP, payload: value });
};

export const setSearchSlide = (value) => (dispatch) => {
	dispatch({ type: SEARCH_SLIDE, payload: value });
};
