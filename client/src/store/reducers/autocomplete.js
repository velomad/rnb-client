import { GET_SUGGESTIONS_LOAD, GET_SUGGESTIONS_FETCH } from "../types";

const initialState = {
	isSuggestionsLoading: false,
	suggestions: [],
};

const suggestionsLoading = (state) => {
	return {
		...state,
		isSuggestionsLoading: true,
	};
};

const getSuggestions = (state, payload) => {
	return {
		...state,
		isSuggestionsLoading: false,
		suggestions: payload,
	};
};

const autocomplete = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_SUGGESTIONS_LOAD:
			return suggestionsLoading(state);
		case GET_SUGGESTIONS_FETCH:
			return getSuggestions(state, payload);
		default:
			return state;
	}
};

export default autocomplete;
