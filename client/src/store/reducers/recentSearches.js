import { SET_SEARCH_TERM, REMOVE_SEARCH_TERM } from "../types";

const initialState = {
	searchTerms: JSON.parse(localStorage.getItem("recentSearches")) || [],
};

const setSearchTerm = (state, payload) => {

	console.log(state.searchTerms.length)

	if(state.searchTerms.length > 6) {
		state.searchTerms.shift()
	}

	const newData = [...state.searchTerms, payload];

	localStorage.setItem(
		"recentSearches",
		JSON.stringify([...state.searchTerms, payload]),
	);

	return {
		...state,
		searchTerms: newData,
	};
};

const removeSearchTerm = (state, payload) => {
	const index = state.searchTerms.indexOf(payload);

	if (index > -1) {
		state.searchTerms.splice(index, 1);
	}

	const newData = [...state.searchTerms];

	localStorage.setItem("recentSearches", JSON.stringify(state.searchTerms));

	return {
		...state,
		searchTerms: newData,
	};
};

const recentSearches = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_SEARCH_TERM:
			return setSearchTerm(state, payload);
		case REMOVE_SEARCH_TERM:
			return removeSearchTerm(state, payload);

		default:
			return state;
	}
};

export default recentSearches;
