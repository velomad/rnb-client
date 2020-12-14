import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { groupBy } from "lodash";
import {
	Dialog,
	AppBar,
	Toolbar,
	Slide,
	Container,
	Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { setFilterPopUpAction } from "../../../../store/actions";
import { Button, Text } from "../../../../components";
import PriceSlider from "./PriceSlider";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import DiscountFilter from "./DiscountFilter";
import CheckboxFilter from "./CheckboxFilter";
import qs from "query-string";
import { history } from "../../../../utils";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
		backgroundColor: " #1a202c",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
		color: "#dddcd7",
	},
	dialogPaper: {
		maxHeight: "100vh",
		// marginTop: "15vh",
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const FiltersPopUp = (props) => {
	const [pro, setNum] = useQueryParam("discountPercent[gte]", StringParam);
	const [foo, setFoo] = useQueryParam("gender", StringParam);
	const [priceFilterGte, setpriceFilterGte] = useQueryParam(
		"productPrice[gte]",
		StringParam,
	);
	const [priceFilterLte, setpriceFilterLte] = useQueryParam(
		"productPrice[lte]",
		StringParam,
	);

	console.log(props.appliedFilters);

	const isElectronic = history.location.pathname.split("/")[1] === "electronic";
	const isFilters = qs.parse(history.location.search);

	const parsedQueryParams = qs.parse(history.location.search);
	let selectedDiscount;

	if ("discountPercent" in parsedQueryParams) {
		selectedDiscount = parsedQueryParams.discountPercent;
	}

	useEffect(() => {
		if ("sub_category" in isFilters && props.dataYugeFilters) {
			props.dataYugeFilters &&
				props.dataYugeFilters.map((el) => {
					el.contents &&
						el.contents.map((elem) => {
							elem["isChecked"] = false;
						});
				});
		}

		setFilterOption(`${!isElectronic ? "Gender" : "Price"}`);
		setActive(0);
	}, [history.location.search, props.dataYugeFilters]);

	var [filterOption, setFilterOption] = useState(
		`${!isElectronic ? "Gender" : "Price"}`,
	);
	const [active, setActive] = useState(0);
	const [genderFilterValue, setGenderFilterValue] = useState("");
	const [discountFilterValue, setDiscountFilterValue] = React.useState("");
	const [priceFilterValue, setPriceFilterValue] = React.useState("");
	const [filterNames, setFilterNames] = React.useState([]);

	const handleCurrentGender = (currentGender) => {
		setGenderFilterValue({ gender: currentGender });
	};

	const setPrice = (val) => {
		setPriceFilterValue(val);
	};

	let filterParams = {};
	Object.assign(
		filterParams,
		genderFilterValue,
		discountFilterValue !== ""
			? { discountPercent: discountFilterValue }
			: null,
		priceFilterValue,
	);

	const handleClose = () => {
		props.setFilterPopUpAction(false);
	};
	const clearFilter = () => {
		handleClose();
		setNum(undefined);
		setFoo(undefined);
		setpriceFilterGte(undefined);
		setpriceFilterLte(undefined);
		window.location.reload();
	};

	const handleApplyFilter = () => {
		setNum(discountFilterValue.discount);
		setFoo(genderFilterValue.gender);
		setpriceFilterGte(priceFilterValue["productPrice[gte]"]);
		setpriceFilterLte(priceFilterValue["productPrice[lte]"]);
		handleClose();
	};

	const filters = ["Gender", "Price", "Discount"];

	let filterTitles = [];

	if (props.dataYugeFilters) {
		props.dataYugeFilters.map((el) => {
			filterTitles.push(el.title);
		});
	}

	const handleSelectFilter = (filter, active) => {
		setFilterOption(filter);
		setActive(active);
	};

	const setDiscount = (value) => {
		setDiscountFilterValue(value);
	};

	let filterTitleMapper;
	if (isElectronic) {
		filterTitleMapper = filterTitles;
	} else {
		filterTitleMapper = filters;
	}

	const classes = useStyles();
	return (
		<div>
			<Dialog
				fullScreen
				open={props.isActive}
				onBackdropClick={handleClose}
				classes={{ paper: classes.dialogPaper }}
				TransitionComponent={Transition}
			>
				<AppBar className={classes.appBar}>
					<Toolbar className="flex justify-between">
						<div>
							<Text weight="400" isTitle={true} classes="uppercase">
								Filters
							</Text>
						</div>
						<div onClick={clearFilter}>
							<Text size="sm" classes="uppercase outline-none text-pink-300">
								clear all
							</Text>
						</div>
					</Toolbar>
				</AppBar>
				<hr style={{ color: "solid black 1px" }} />

				<div className="grid grid-cols-3 h-full">
					<div
						className="col-span-1 bg-gray-200 overflow-y-scroll"
						style={{ height: document.body.clientHeight - 110 }}
					>
						<ul>
							{filterTitleMapper.map((el, index) => (
								<React.Fragment key={index}>
									<li
										className={`p-3 ${index == active && "bg-white"}`}
										onClick={() => handleSelectFilter(el, index)}
									>
										<Text size="md" variant="primary">
											{el}
										</Text>
									</li>
									<hr style={{ color: "solid black 1px" }} />
								</React.Fragment>
							))}
						</ul>
					</div>
					<div className="col-span-2">
						{!isElectronic ? (
							<React.Fragment>
								{filterOption === "Gender" ? (
									<GenderFilter
										setParentGender={handleCurrentGender}
										parsedQueryParams={parsedQueryParams}
									/>
								) : filterOption === "Price" ? (
									<PriceFilter
										getPriceFilterValue={setPrice}
										parsedQueryParams={parsedQueryParams}
									/>
								) : filterOption === "Discount" ? (
									<DiscountFilter
										selectedDiscount={selectedDiscount}
										getDiscountFilterValue={setDiscount}
										discountFilterValue={discountFilterValue}
										parsedQueryParams={parsedQueryParams}
									/>
								) : null}
							</React.Fragment>
						) : (
							<React.Fragment>
								{"sub_category" in isFilters && (
									<div>
										{props.dataYugeFilters &&
										props.dataYugeFilters.length !== 0 ? (
											<CheckboxFilter
												filterOption={filterOption}
												activeOption={active}
												filterNames={filterTitles}
												filters={
													active.toString() && {
														[filterOption]:
															props.dataYugeFilters[active].contents,
													}
												}
											/>
										) : (
											""
										)}
									</div>
								)}
							</React.Fragment>
						)}
					</div>
				</div>
				<hr style={{ color: "solid black 1px" }} />

				<div className="flex items-center justify-around p-4">
					<div onClick={() => handleClose()}>
						<Button>CLOSE</Button>
					</div>
					<div onClick={handleApplyFilter}>
						<Button variant="primary" size="small" animate={true}>
							APPLY
						</Button>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

const mapStateToProps = ({ uiState, dataYugeProductsState }) => ({
	isActive: uiState.isFilter,
	dataYugeFilters: dataYugeProductsState.filters,
	appliedFilters: uiState.appliedFilters,
});

const mapDispatchToProps = { setFilterPopUpAction };

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPopUp);
