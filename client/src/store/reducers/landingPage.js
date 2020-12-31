import { GET_SLIDER_LOAD, GET_SLIDER_FETCH } from "../types";

const initialState = {
	isSliderLoading: false,
	sliders: [],
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
		default:
			return state;
	}
};

export default landingPage;
