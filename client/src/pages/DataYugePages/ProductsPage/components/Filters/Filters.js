import React, { useEffect, useState } from "react";
import { Text } from "../../../../../components";
import { history } from "../../../../../utils";
import { connect } from "react-redux";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import qs from "query-string";
import {
	useQueryParam,
	NumberParam,
	StringParam,
	DelimitedArrayParam,
} from "use-query-params";
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@material-ui/core";

const Filters = (props) => {
	const [renderUI, setRenderUI] = useState(false);

	const [start, setPriceStart] = useQueryParam("price_start", StringParam);
	const [end, setPriceEnd] = useQueryParam("price_end", StringParam);
	const [paramFilter, setFilter] = useQueryParam("filter", DelimitedArrayParam);

	console.log(renderUI);
	console.log(props.dataYugeFilters);

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

	// const getDiscount = (e) => {
	// 	props.getDiscountFilterValue(
	// 		{
	// 			'discount': e.target.value
	// 		}
	// 	);
	// };

	const handleChange = (e, newData, sideIndex) => {
		let dummyArr = [];
		newData.index = e.target.id;
		const val = e.target.value;
		dummyArr.push(newData);

		props.dataYugeFilters[sideIndex].contents.map((el, outindex) => {
			dummyArr.map((innerEl) => {
				if (
					Number(outindex) === Number(innerEl.index) &&
					el.name === innerEl.name &&
					innerEl.isChecked === false
				) {
					el.isChecked = true;
					setRenderUI(!renderUI);

					// setPriceStart(val.split("-")[0]);
					// setPriceEnd(val.split("-")[1]);

					if ("filter" in qs.parse(history.location.search)) {
						setFilter(...paramFilter, "|" + val);
					} else {
						setFilter(val);
					}
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

	const RadioLabel = (props) => {
		return (
			<div>
				<Text variant="primary" size="sm">
					{props.val}
				</Text>
			</div>
		);
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

			<div className="py-2 pt-4">
				<Text variant="primaryDark" weight="700" size="sm">
					Price
				</Text>
			</div>

			<div>
				<FormControl component="fieldset">
					<RadioGroup
						aria-label="discount"
						name="discount"
						// defaultValue={props.selectedDiscount}
						// value={props.discountFilterValue.discount}
						// onChange={getDiscount}
					>
						{props.dataYugeFilters.length > 0 &&
							props.dataYugeFilters[0].contents.map((el) => (
								<div key={el.name} className=" flex space-x-4 items-center">
									<div>
										<FormControlLabel
											value={`${el.name}`}
											control={<Radio />}
											label={<RadioLabel val={el.name} />}
										/>
									</div>
									{/* <div>
									<Text variant="primary" size="lg">
										{el}% and Above
									</Text>
								</div> */}
								</div>
							))}
					</RadioGroup>
				</FormControl>
			</div>

			<div>
				{"sub_category" in isFilters &&
					props.dataYugeFilters &&
					props.dataYugeFilters.slice(1, 5).map((elem, mainindex) => (
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
									style={{ scrollbarColor: "deepskyblue" }}
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
																onChange={(e) => handleChange(e, el, mainindex)}
																name={<Text variant="primary">{el.name}</Text>}
																value={
																	props.dataYugeFilters[mainindex].title ===
																	"Price"
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
																onChange={(e) => handleChange(e, el, mainindex)}
																name={<Text variant="primary">{el.name}</Text>}
																value={
																	props.dataYugeFilters[mainindex].title ===
																	"Price"
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

export default connect(mapStateToProps)(React.memo(Filters));