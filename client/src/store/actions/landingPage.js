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
import Axios from "axios";

export const getSlider = () => async (dispatch) => {
	dispatch({ type: GET_SLIDER_LOAD });
	try {
		const response = await Axios.get(
			`https://cors-anywhere.herokuapp.com/https://reachnbuy.unitechitsolution.in/AndroidClass/get_slider.php`,
		);
		dispatch({
			type: GET_SLIDER_FETCH,
			payload: response.data.slider_list,
		});
	} catch (err) {
		console.log(err.response.data);
	}
};

export const getStories = () => async (dispatch) => {
	dispatch({ type: GET_STORIES_LOAD });
	try {
		const response = await Axios.get(
			`https://cors-anywhere.herokuapp.com/http://reachnbuy.unitechitsolution.in/AndroidClass/get_stores_list.php`,
		);
		dispatch({
			type: GET_STORIES_FETCH,
			payload: response.data.ads_list,
		});
	} catch (err) {
		console.log(err.response.data);
	}
};

export const getOffers = () => async (dispatch) => {
	dispatch({ type: GET_OFFERS_LOAD });
	try {
		const response = await Axios.get(
			`https://cors-anywhere.herokuapp.com/http://reachnbuy.unitechitsolution.in/AndroidClass/get_offer.php`,
		);
		dispatch({
			type: GET_OFFERS_FETCH,
			payload: response.data.offer_list,
		});
	} catch (err) {
		console.log(err.response.data);
	}
};

export const getNews = () => async (dispatch) => {
	dispatch({ type: GET_NEWS_LOAD });
	try {
		const response = await Axios.get(
			`https://cors-anywhere.herokuapp.com/http://reachnbuy.unitechitsolution.in/AndroidClass/reachnbuynews.php`,
		);
		dispatch({
			type: GET_NEWS_FETCH,
			payload: response.data.news_list,
		});
	} catch (err) {
		console.log(err.response.data);
	}
};
