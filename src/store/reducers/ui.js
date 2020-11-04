import { FILTER_POPUP, SORT_POPUP, SEARCH_SLIDE } from "../types";

const initialState = {
	isFilter: false,
    isSort: false,
    isSearchSlide : false
};

const ui = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
        case FILTER_POPUP:
            return {
                ...state,
                isFilter : payload
            }
        case SORT_POPUP:
            return {
                ...state,
                isSort : payload
            }
        case SEARCH_SLIDE:
            return {
                ...state,
                isSearchSlide : payload
            }
		default:
			return state;
	}
};

export default ui;
