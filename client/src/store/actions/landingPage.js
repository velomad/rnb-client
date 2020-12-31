import { GET_SLIDER_LOAD, GET_SLIDER_FETCH } from "../types";
import Axios from "axios";

export const getSlider = () => async (dispatch) => {
	dispatch({ type: GET_SLIDER_LOAD });
	try {
		const response = await Axios.get(
			`http://reachnbuy.unitechitsolution.in/AndroidClass/get_slider.php`,
		);
		console.log("response from action", response.data.slider_list);
		dispatch({
			type: GET_SLIDER_FETCH,
			payload: response.data.slider_list,
		});
	} catch (err) {
		console.log(err.response.data);
	}
};
