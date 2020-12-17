import React, { useEffect, useState } from "react";
import { Text } from "../../../../../components";
import { history } from "../../../../../utils";
import Chip from "@material-ui/core/Chip";
import { connect } from "react-redux";
import qs from "query-string";
import "./header.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Header = ({ categoryName, dataYugeFilters }) => {
	const [filtersData, setFiltersData] = useState([]);
	const [activeChip, setActiveChip] = useState(null);
	const [renderUI, setRenderUI] = useState(false);

	console.log(dataYugeFilters);

	const isFilters = qs.parse(history.location.search);

	useEffect(() => {
		setFiltersData([]);
		setActiveChip(null);
	}, [history.location.search]);

	const handleChipClick = (chipIndex) => {
		setActiveChip(chipIndex);
		setFiltersData(dataYugeFilters[chipIndex].contents);
	};

	const handleChange = (e, newData) => {
		let dummyArr = [];
		newData.index = e.target.id;
		dummyArr.push(newData);

		dataYugeFilters.map((el, outindex) => {
			dummyArr.map((innerEl) => {
				if (
					Number(outindex) === Number(innerEl.index) &&
					el.name === innerEl.name &&
					innerEl.isChecked === false
				) {
					el.isChecked = true;
					setRenderUI(!renderUI);
				} else {
					if (
						innerEl.isChecked === true &&
						Number(outindex) === Number(innerEl.index)
					) {
						el.isChecked = false;
						setRenderUI(!renderUI);
					}
					if (el.isChecked) {
					} else {
						el.isChecked = false;
						setRenderUI(!renderUI);
					}
				}
			});
		});
	};

	return (
		<React.Fragment>
			<div>
				<Text classes="capitalize" weight="600">
					{categoryName}
				</Text>
			</div>
			<div className="col-span-3 space-x-4  space-y-8">
				{"sub_category" in isFilters &&
					dataYugeFilters &&
					dataYugeFilters.slice(5, -1).map((el, index) => (
						<Chip
							draggable={true}
							style={{
								marginTop: 8,
								backgroundColor: index + 5 == activeChip && "#111827",
								color: index + 5 == activeChip && "#fff",
							}}
							// className="mt-4"
							onClick={() => handleChipClick(index + 5)}
							size="small"
							label={
								<div className="flex space-x-2 items-center">
									<Text
										size="xs"
										variant={` ${
											index + 5 == activeChip ? "white" : "primaryDark"
										} `}
									>
										{el.title}
									</Text>

									<svg
										class="fill-current h-4 w-4 transform hover:rotate-180
        transition duration-150 ease-in-out"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							}
							// onDelete={handleDelete}
						/>
					))}

				<div className={`grid ${activeChip !== null && "h-72 overflow-y-scroll" }  grid-cols-4`}>
					{/* {filtersData.map((el, index) => (
						<div>
							<Text size="xs" variant="primary">
								{el.name}
							</Text>
						</div>
					))} */}

					{renderUI
						? filtersData &&
						  filtersData.map((el, index) => (
								<span key={index}>
									<FormControlLabel
										key={el + index}
										control={
											<Checkbox
												size="small"
												checked={el.isChecked}
												onChange={(e) => handleChange(e, el)}
												name={<Text variant="primary">{el.name}</Text>}
												// value={
												// 	filterOption === "Price"
												// 		? el.price_start + "-" + el.price_end
												// 		: el.filter
												// }
												id={index}
											/>
										}
										label={
											<Text variant="primaryDark" size="xs">
												{el.name}
											</Text>
										}
									/>
								</span>
						  ))
						: filtersData &&
						  filtersData.map((el, index) => (
								<span key={index}>
									<FormControlLabel
										key={el + index}
										control={
											<Checkbox
												size="small"
												checked={el.isChecked}
												onChange={(e) => handleChange(e, el)}
												name={<Text variant="primary">{el.name}</Text>}
												// value={
												// 	props.filterOption === "Price"
												// 		? el.price_start + "-" + el.price_end
												// 		: el.filter
												// }
												id={index}
											/>
										}
										label={
											<div className="block">
												<Text variant="primary" size="xs">
													{el.name}
												</Text>
											</div>
										}
									/>
								</span>
						  ))}
				</div>
			</div>
			<div>
				<div class="group inline-block">
					<button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
						<span class="pr-1 flex-1">
							<Text variant="primary" size="sm" weight="700">
								Dropdown
							</Text>
						</span>
						<span>
							<svg
								class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</span>
					</button>
					<ul
						class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
					>
						<li class="rounded-sm px-3 py-1 hover:bg-gray-100">
							<Text variant="primary" size="sm">
								Popularity
							</Text>
						</li>
						<li class="rounded-sm px-3 py-1 hover:bg-gray-100">
							<Text variant="primary" size="sm">
								High to low
							</Text>
						</li>
						<li class="rounded-sm px-3 py-1 hover:bg-gray-100">
							<Text variant="primary" size="sm">
								Low to High
							</Text>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = ({ uiState, dataYugeProductsState }) => ({
	dataYugeFilters: dataYugeProductsState.filters,
	appliedFilters: uiState.appliedFilters,
});

export default connect(mapStateToProps)(Header);
