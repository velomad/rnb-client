import React from "react";
import { Text } from "../../../../../components";
import { history } from "../../../../../utils";
import SearchIcon from "@material-ui/icons/Search";

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
	handleClose
}) => {
	const getSearchResults = (term) => {
		suggestedTermCallback(term);
		handleClose()
		history.push(`/search?term=${term}`)
	};

	return (
		<div className="p-4">
			{isSuggestionsLoading === true ? (
				<SuggestionsLoading />
			) : (
				<ul>
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
									<Text variant="secondary" size="lg">
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

export default SearchSuggestions;
