import { SET_SEARCH_TERM, REMOVE_SEARCH_TERM } from "../types";

export const setSearchTerm = (term) => (dispatch) => {
	setTimeout(() => {
		dispatch({ type: SET_SEARCH_TERM, payload: term });		
	}, 1000);
};

export const removeSearchTerm = (termIndex) => (dispatch) => {
	dispatch({ type: REMOVE_SEARCH_TERM, payload : termIndex });
};
