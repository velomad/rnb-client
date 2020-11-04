import { combineReducers } from "redux";
import ui from "./ui";
import dataSkoreProducts from "./dataSkoreProducts";
import recentSearches from "./recentSearches";

export default combineReducers({
	uiState: ui,
	dataSkoreProductsState: dataSkoreProducts,
	recentSearchesState: recentSearches,
});
