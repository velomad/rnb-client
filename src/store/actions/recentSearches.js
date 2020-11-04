import { SET_SEARCH_TERM, REMOVE_SEARCH_TERM } from "../types";

export const setSearchTerm = (term) => (dispatch) => {
	dispatch({ type: SET_SEARCH_TERM, payload: term });
};

export const removeSearchTerm = (termIndex) => (dispatch) => {
	dispatch({ type: REMOVE_SEARCH_TERM, payload : termIndex });
};
