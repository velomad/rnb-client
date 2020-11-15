import React from "react";
import Chip from "@material-ui/core/Chip";
import { Text } from "../../../../../components";
import { history } from "../../../../../utils";
import { removeSearchTerm } from "../../../../../store/actions";
import { connect } from "react-redux";

const SearchChip = ({ removeSearchTerm, searchTerms, handleClose }) => {
	const handleDelete = (removeTerm) => {
		removeSearchTerm(removeTerm);
	};

	const handleClick = (term) => {
		handleClose();
		history.push(`/items/search?term=${term}`);
	};

	const recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
	console.log(recentSearches);

	return (
		<div className="flex-wrap space-x-4 space-y-2 ">
			{searchTerms.map((term, index) => (
				<Chip
					key={index}
					label={
						<Text size="md" variant="white">
							{term}
						</Text>
					}
					onClick={() => handleClick(term)}
					onDelete={() => handleDelete(term)}
					color="secondary"
				/>
			))}
		</div>
	);
};

const mapStateToProps = ({ recentSearchesState }) => ({
	searchTerms: recentSearchesState.searchTerms,
});

const mapDispatch = (dispatch) => {
	return {
		removeSearchTerm: (val) => dispatch(removeSearchTerm(val)),
	};
};

export default connect(mapStateToProps, mapDispatch)(SearchChip);
