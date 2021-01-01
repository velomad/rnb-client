import {
	GET_SLIDER_LOAD,
	GET_SLIDER_FETCH,
	GET_STORIES_LOAD,
	GET_STORIES_FETCH,
	GET_OFFERS_LOAD,
	GET_OFFERS_FETCH,
	GET_NEWS_LOAD,
	GET_NEWS_FETCH,
} from "../types";

const initialState = {
	isSliderLoading: false,
	sliders: [],
	isStoriesLoading: false,
	stories: [],
	isOffersLoading: false,
	offers: [],
	isNewsLoading: false,
	news: [],
};

const landingPage = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_SLIDER_LOAD:
			return {
				...state,
				isSliderLoading: true,
			};
		case GET_SLIDER_FETCH:
			return {
				...state,
				isSliderLoading: false,
				sliders: payload,
			};
		case GET_STORIES_LOAD:
			return {
				...state,
				isStoriesLoading: true,
			};
		case GET_STORIES_FETCH:
			return {
				...state,
				isStoriesLoading: false,
				stories: payload,
			};
		case GET_OFFERS_LOAD:
			return {
				...state,
				isOffersLoading: true,
			};
		case GET_OFFERS_FETCH:
			return {
				...state,
				isOffersLoading: false,
				offers: payload,
			};
		case GET_NEWS_LOAD:
			return {
				...state,
				isNewsLoading: true,
			};
		case GET_NEWS_FETCH:
			return {
				...state,
				isNewsLoading: false,
				news: payload,
			};
		default:
			return state;
	}
};

export default landingPage;
