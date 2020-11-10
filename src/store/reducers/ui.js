import { FILTER_POPUP, SORT_POPUP, SEARCH_SLIDE, BACK_FROM_PRODUCT_DETAIL } from "../types";

const initialState = {
    isFilter: false,
    isSort: false,
    isSearchSlide: false,
    isBackFromProductDetail: false
};

const ui = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FILTER_POPUP:
            return {
                ...state,
                isFilter: payload
            }
        case SORT_POPUP:
            return {
                ...state,
                isSort: payload
            }
        case SEARCH_SLIDE:
            return {
                ...state,
                isSearchSlide: payload
            }
        case BACK_FROM_PRODUCT_DETAIL:
            return {
                ...state,
                isBackFromProductDetail: payload
            }
        default:
            return state;
    }
};

export default ui;
