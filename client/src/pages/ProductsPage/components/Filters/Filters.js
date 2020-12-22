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

const Filters = (props) => {
	const [selectedGender, setSelectedGender] = React.useState("");
	const discounts = [10, 20, 30, 40, 50, 60, 70];
	const genderArry = ["men", "women"];
	const start = 0;
	const end = 20000;
	const [value, setValue] = React.useState([start, end]);

	const applyPriceFilter = () => {
		let priceObj = {
			"productPrice[gte]": value[0],
			"productPrice[lte]": value[1],
		};

		const queryparams = qs.stringify(priceObj);
		const parsedQueryParams = history.location.search;

		history.push(`/products${parsedQueryParams}&${queryparams}`);
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

	const getDiscount = (e) => {
		let discountObj = {};
		console.log("before genderObj", discountObj);
		discountObj = { discountPercent: e.target.value };
		console.log("after genderObj", discountObj);
		const queryparams = qs.stringify(discountObj);
		const parsedQueryParams = history.location.search;

		history.push(`/products${parsedQueryParams}&${queryparams}`);
	};

	const handleGenderSelection = (currentGender) => {
		setSelectedGender(currentGender);
		let genderObj = {};
		console.log("before genderObj", genderObj);
		genderObj = { gender: currentGender };
		console.log("after genderObj", genderObj);
		const queryparams = qs.stringify(genderObj);
		const parsedQueryParams = history.location.search;

		history.push(`/products${parsedQueryParams}&${queryparams}`);
	};
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
						onChange={getDiscount}
					>
						{genderArry.map((el) => (
							<div key={el} className=" flex space-x-4 items-center">
								<div>
									<FormControlLabel
										value={`${el}`}
										s
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
							onClick={() => applyPriceFilter()}
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
