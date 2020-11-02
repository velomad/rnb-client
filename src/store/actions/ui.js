import { FILTER_POPUP, SORT_POPUP } from "../types";

export const setFilterPopUpAction = (value) => (dispatch) => {
	dispatch({ type: FILTER_POPUP, payload: value });
};

export const setSortPopUpAction = (value) => (dispatch) => {
	dispatch({ type: SORT_POPUP, payload: value });
};
