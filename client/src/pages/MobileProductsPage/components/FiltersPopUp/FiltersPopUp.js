import React, { useState } from "react";
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

	const isElectronic = history.location.pathname.split("/")[1] === "electronic";

	const parsedQueryParams = qs.parse(history.location.search);
	let selectedDiscount;

	if ("discountPercent" in parsedQueryParams) {
		selectedDiscount = parsedQueryParams.discountPercent;
	}

	const [filterOption, setFilterOption] = useState(
		`${isElectronic ? "Brand" : "Gender"}`,
	);
	const [active, setActive] = useState("1");
	const [genderFilterValue, setGenderFilterValue] = useState("");
	const [discountFilterValue, setDiscountFilterValue] = React.useState("");
	const [priceFilterValue, setPriceFilterValue] = React.useState("");

	const handleCurrentGender = (currentGender) => {
		setGenderFilterValue({ gender: currentGender });
	};

	const setPrice = (val) => {
		setPriceFilterValue(val);
	};

	let filterParams = {};
	console.log("beforeeee", filterParams);
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
		setNum(undefined);
		setFoo(undefined);
		setpriceFilterGte(undefined);
		setpriceFilterLte(undefined);
		window.location.reload();
	};

	console.log("priceFilterValue", priceFilterValue);
	const handleApplyFilter = () => {
		setNum(discountFilterValue.discount);
		setFoo(genderFilterValue.gender);
		setpriceFilterGte(priceFilterValue["productPrice[gte]"]);
		setpriceFilterLte(priceFilterValue["productPrice[lte]"]);
		handleClose();
	};

	const filters = ["Gender", "Price", "Discount", "Brand"];

	let filterTitles = [];

	props.dataYugeFilters.map((el) => {
		filterTitles.push(el.title);
	});

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

	console.log(filterOption);
	console.log(props.dataYugeFilters);

	// const getFilterData = () => {
	// 	let finalData = props.dataYugeFilters.filter(
	// 		(el) => el.title == filterOption,
	// 	);
	// 	return finalData;
	// };

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
					<div className="col-span-1 bg-gray-200 h-full">
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
						{filterOption === "Gender" ? (
							<GenderFilter
								setParentGender={handleCurrentGender}
								parsedQueryParams={parsedQueryParams}
							/>
						) : filterOption === "Price" ? (
							<PriceFilter
								isElectronic={isElectronic}
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
						<div>
							<CheckboxFilter
								filterOption={filterOption}
								filterData={props.dataYugeFilters}
								parsedQueryParams={parsedQueryParams}
							/>
						</div>
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
});

const mapDispatchToProps = { setFilterPopUpAction };

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPopUp);
