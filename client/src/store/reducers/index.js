import { combineReducers } from "redux";
import ui from "./ui";
import dataSkoreProducts from "./dataSkoreProducts";
import recentSearches from "./recentSearches";
import autocomplete from "./autocomplete";

export default combineReducers({
	uiState: ui,
	dataSkoreProductsState: dataSkoreProducts,
	recentSearchesState: recentSearches,
	autocompleteState: autocomplete,
});
