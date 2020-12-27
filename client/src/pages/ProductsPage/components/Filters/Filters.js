import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import { Text } from "../../../../components";
import PriceFilter from "../../../MobileProductsPage/components/FiltersPopUp/PriceFilter";
import qs from "query-string";
import { history } from "../../../../utils";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@material-ui/core";
import { Button } from "../../../../components";
import { StringParam, useQueryParam } from "use-query-params";

const Filters = (props) => {
	const [selectedGender, setSelectedGender] = React.useState("");
	const discounts = [10, 20, 30, 40, 50, 60, 70];
	const genderArry = ["men", "women"];
	const start = 0;
	const end = 20000;
	const [value, setValue] = React.useState([start, end]);

	const [genderParam, setGenderParam] = useQueryParam("gender");
	const [discountPercentParam, setDiscountPercentParam] = useQueryParam(
		"discountPercent[gte]",
	);

	const [productPriceGte, setProductPriceGteParam] = useQueryParam(
		"productPrice[gte]",
	);

	const [productPriceLte, setProductPriceLteParam] = useQueryParam(
		"productPrice[lte]",
	);

	const applyPriceFilter = () => {
		let priceObj = {
			priceLess: value[0],
			priceMore: value[1],
		};

		console.log("priceObj", priceObj);
		setProductPriceGteParam(priceObj.priceLess);
		setProductPriceLteParam(priceObj.priceMore);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const RadioLabel = (props) => {
		return (
			<div>
				<Text variant="primary" size="sm">
					{props.val}% and Above
				</Text>
			</div>
		);
	};

	const GenderRadioLabel = (props) => {
		return (
			<div>
				<Text variant="primary" size="sm">
					{props.val}
				</Text>
			</div>
		);
	};

	const getGenderFilter = (e) => {
		setGenderParam(e.target.value);
	};

	const getDiscount = (e) => {
		setDiscountPercentParam(e.target.value);
	};
	// const handleGenderSelection = (currentGender) => {
	// 	setSelectedGender(currentGender);
	// 	let genderObj = {};
	// 	console.log("currentGender", currentGender);
	// 	genderObj = { gender: currentGender };
	// 	// console.log("after genderObj", genderObj);
	// 	const queryparams = qs.stringify(genderObj);
	// 	const parsedQueryParams = history.location.search;
	// 	// history.push(`/products${parsedQueryParams}&${queryparams}`);
	// };

	return (
		<div>
			<div className="py-4 space-y-4">
				<div>
					<Text weight={600} size="md" variant="primaryDark">
						Gender
					</Text>
				</div>
				<FormControl component="fieldset">
					<RadioGroup
						aria-label="discount"
						name="discount"
						value={props.discountFilterValue}
						onChange={getGenderFilter}
					>
						{genderArry.map((el) => (
							<div key={el} className=" flex space-x-4 items-center">
								<div>
									<FormControlLabel
										value={`${el}`}
										control={<Radio />}
										label={<GenderRadioLabel val={el} />}
									/>
								</div>
							</div>
						))}
					</RadioGroup>
				</FormControl>
			</div>
			<div className="my-5">
				<Divider variant="fullWidth" />
			</div>
			<div className="py-4 space-y-4">
				<Text weight={600} size="md" variant="primaryDark">
					Price
				</Text>
				<div>
					<div className="px-4">
						<Slider
							min={0}
							max={20000}
							value={value}
							onChange={handleChange}
							valueLabelDisplay="auto"
							aria-labelledby="range-slider"
						/>
					</div>
					<div className="px-2 flex justify-between items-center">
						<div>
							<Text variant="primaryDark" weight="600" size="sm">
								&#8377;{value[0]}
							</Text>
						</div>

						<div>
							<Text variant="primaryDark" weight="600" size="sm">
								&#8377;{value[1]} {value[1] === 20000 && "+"}
							</Text>
						</div>
					</div>
					<div className="mt-4">
						<Button
							handleClick={applyPriceFilter}
							size="small"
							variant="primary"
						>
							Apply
						</Button>
					</div>
				</div>
			</div>
			<div className="my-5">
				<Divider variant="fullWidth" />
			</div>
			<div>
				<div className="">
					<Text weight={600} size="md" variant="primaryDark">
						Discount
					</Text>
				</div>
				<div className=" h-full g-gray-100">
					<div className="py-4 space-y-6">
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="discount"
								name="discount"
								value={props.discountFilterValue}
								onChange={getDiscount}
							>
								{discounts.map((el) => (
									<div key={el} className=" flex space-x-4 items-center">
										<div>
											<FormControlLabel
												value={`${el}`}
												control={<Radio />}
												label={<RadioLabel val={el} />}
											/>
										</div>
									</div>
								))}
							</RadioGroup>
						</FormControl>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
