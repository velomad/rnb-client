import { combineReducers } from "redux";
import ui from "./ui";
import dataSkoreProducts from "./dataSkoreProducts";

export default combineReducers({
	uiState: ui,
	dataSkoreProductsState: dataSkoreProducts,
});
