import React from "react";
import { Text } from "../../../../../components";
import { history } from "../../../../../utils";
import { setSearchTerm } from "../../../../../store/actions";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";

const SuggestionsLoading = () => {
	return (
		<div className="text-center">
			<Text size="xl" variant="primary">
				Loading...
			</Text>
		</div>
	);
};

const SearchSuggestions = ({
	suggestions,
	isSuggestionsLoading,
	suggestedTermCallback,
	handleClose,
	setSearchTerm,
	searchCategory,
}) => {
	const getSearchResults = (term) => {
		// suggestedTermCallback(term);
		setSearchTerm({ searchTerm: term, category: searchCategory });
		const filteredSearchTerm = term.replace(/\b(men|women|casual)\b/g, "");
		if (searchCategory === "electronic") {
			history.push(`/electronic/items/search?product=${filteredSearchTerm}`);
		} else {
			history.push(`/items/search?term=${filteredSearchTerm}`);
		}
		handleClose();
	};

	return (
		<div className="p-4  bg-gray-100">
			{isSuggestionsLoading === true ? (
				<SuggestionsLoading />
			) : (
				<ul className="">
					{suggestions.map((element) => (
						<React.Fragment>
							<li
								onClick={() => getSearchResults(element)}
								className="flex items-center space-x-4 py-4"
							>
								<div>
									<SearchIcon fontSize="small" className="text-gray-400" />
								</div>
								<div>
									<Text variant="primaryDark" size="lg">
										{element}
									</Text>
								</div>
							</li>
						</React.Fragment>
					))}
				</ul>
			)}
		</div>
	);
};

export default connect(null, { setSearchTerm })(SearchSuggestions);
