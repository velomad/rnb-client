import React, { useEffect, useState } from "react";
import { Text } from "../../../../../components";
import { history } from "../../../../../utils";
import { connect } from "react-redux";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import qs from "query-string";

const Filters = (props) => {
	const [renderUI, setRenderUI] = useState(false);

	const isFilters = qs.parse(history.location.search);

	useEffect(() => {
		if ("sub_category" in isFilters) {
			props.dataYugeFilters &&
				props.dataYugeFilters.map((el) => {
					el.contents &&
						el.contents.map((elem) => {
							elem["isChecked"] = false;
						});
				});
		}
	}, []);

	const handleChange = (e, newData) => {
		let dummyArr = [];
		newData.index = e.target.id;
		dummyArr.push(newData);

		props.dataYugeFilters.map((el, outindex) => {
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
		<div>
			<div className="flex justify-between">
				<div>
					<Text
						variant="primaryDark"
						classes="uppercase"
						weight="700"
						size="sm"
					>
						filters
					</Text>
				</div>
				<div>
					<div className="flex items-center">
						<DeleteOutlineOutlinedIcon
							fontSize="small"
							className="text-red-500"
						/>
						<Text weight={600} variant="danger" classes="uppercase" size="xs">
							Clear All
						</Text>
					</div>
				</div>
			</div>

			<div>
				{"sub_category" in isFilters &&
				props.dataYugeFilters &&
					props.dataYugeFilters.slice(0, 5).map((elem, index) => (
						<div className="py-6 border-b-2">
							<div className="flex justify-between">
								<Text variant="primaryDark" size="sm" weight="700">
									{elem.title}
								</Text>
								<Text variant="primaryDark" size="xs" weight="700">
									{elem.title == "Brand" && elem.contents.length}
								</Text>
							</div>

							<div className="space-y-0">
								<ul
									className={`${
										elem.contents.length > 6 && "h-96"
									} overflow-y-scroll`}
									style={{scrollbarColor:"deepskyblue"}}
								>
									{renderUI
										? elem.contents &&
										  elem.contents.map((el, index) => (
												<li key={index}>
													<FormControlLabel
														key={el + index}
														control={
															<Checkbox
																size="small"
																checked={el.isChecked}
																onChange={(e) => handleChange(e, el)}
																name={<Text variant="primary">{el.name}</Text>}
																value={
																	props.filterOption === "Price"
																		? el.price_start + "-" + el.price_end
																		: el.filter
																}
																id={index}
															/>
														}
														label={
															<Text variant="primaryDark" size="xs">
																{el.name}
															</Text>
														}
													/>
												</li>
										  ))
										: elem.contents &&
										  elem.contents.map((el, index) => (
												<li key={index}>
													<FormControlLabel
														key={el + index}
														control={
															<Checkbox
																size="small"
																checked={el.isChecked}
																onChange={(e) => handleChange(e, el)}
																name={<Text variant="primary">{el.name}</Text>}
																value={
																	props.filterOption === "Price"
																		? el.price_start + "-" + el.price_end
																		: el.filter
																}
																id={index}
															/>
														}
														label={
															<Text variant="primary" size="xs">
																{el.name}
															</Text>
														}
													/>
												</li>
										  ))}
								</ul>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

const mapStateToProps = ({ uiState, dataYugeProductsState }) => ({
	dataYugeFilters: dataYugeProductsState.filters,
	appliedFilters: uiState.appliedFilters,
});

export default connect(mapStateToProps)(Filters);
