import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import BrandFilter from "./BrandFilter";
import qs from "query-string";
import { history } from "../../../../utils";

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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const FiltersPopUp = (props) => {
	const parsedQueryParams = qs.parse(history.location.search);
	let selectedDiscount;

	if ("discountPercent" in parsedQueryParams) {
		selectedDiscount = parsedQueryParams.discountPercent;
	}

	const [filterOption, setFilterOption] = useState("Gender");
	const [genderFilterValue, setGenderFilterValue] = useState("");
	const [discountFilterValue, setDiscountFilterValue] = React.useState(
		selectedDiscount,
	);
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
	console.log("afterrrr", filterParams);

	const queryParams = qs.stringify(filterParams);

	const handleClose = () => {
		props.setFilterPopUpAction(false);
	};

	const handleApplyFilter = () => {
		var location = history.location.search;

		if (
			Object.keys(filterParams).includes("gender") === true &&
			Object.values(filterParams).includes(genderFilterValue)
		) {
			handleClose();
		} else {
			if ("gender" in filterParams) {
				delete parsedQueryParams.gender;
			}
			history.push(`/products${location}&${queryParams}`);
			handleClose();
		}
	};

	const filters = ["Gender", "Price", "Discount"];

	const handleSelectFilter = (filter) => {
		setFilterOption(filter);
	};

	const setDiscount = (value) => {
		setDiscountFilterValue(value);
	};

	const classes = useStyles();
	return (
		<div>
			<Dialog fullScreen open={props.isActive} TransitionComponent={Transition}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Filter
						</Typography>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				{/* <div className="flex justify-between p-3">
					<div>
						<Text variant="secondary" weight="500" size="lg">
							Filters
						</Text>
					</div>
					<div onClick={handleClose}>
						<CloseIcon />
					</div>
				</div> */}
				<hr style={{ color: "solid black 1px" }} />

				<div className="grid grid-cols-3 h-full">
					<div className="col-span-1 bg-gray-200 h-full">
						<ul className="">
							{filters.map((el, index) => (
								<React.Fragment key={index}>
									<li className={`p-3`} onClick={() => handleSelectFilter(el)}>
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
								getPriceFilterValue={setPrice}
								parsedQueryParams={parsedQueryParams}
							/>
						) : filterOption === "Discount" ? (
							<DiscountFilter
								getDiscountFilterValue={setDiscount}
								discountFilterValue={discountFilterValue}
								parsedQueryParams={parsedQueryParams}
								parsedQueryParams={parsedQueryParams}
							/>
						) : filterOption === "Brand" ? (
							<BrandFilter parsedQueryParams={parsedQueryParams} />
						) : null}
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

const mapStateToProps = ({ uiState }) => ({
	isActive: uiState.isFilter,
});

const mapDispatchToProps = { setFilterPopUpAction };

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPopUp);
