import { combineReducers } from "redux";
import ui from "./ui";
import dataSkoreProducts from "./dataSkoreProducts";
import recentSearches from "./recentSearches";
import autocomplete from "./autocomplete";
import dataYugeProducts from "./dataYugeProducts";

export default combineReducers({
	uiState: ui,
	dataSkoreProductsState: dataSkoreProducts,
	recentSearchesState: recentSearches,
	autocompleteState: autocomplete,
	dataYugeProductsState: dataYugeProducts,
});
