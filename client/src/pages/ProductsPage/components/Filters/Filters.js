import React from 'react';
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
import { Button } from '../../../../components';

const useStyles = makeStyles({
	root: {
		width: 200,
	},
});

function valuetext(value) {
	return `${value}°C`;
}
const Filters = (props) => {
	const [selectedGender, setSelectedGender] = React.useState("");
	const discounts = [10, 20, 30, 40, 50, 60, 70];
	const classes = useStyles();
	const start = 0;
	const end = 20000;
	const [value, setValue] = React.useState([start, end]);

	const applyPriceFilter = () => {
		let priceObj = {
			"productPrice[gte]": value[0],
			"productPrice[lte]": value[1],
		}

		const queryparams = qs.stringify(priceObj);
		const parsedQueryParams = history.location.search;

		history.push(`/products${parsedQueryParams}&${queryparams}`);
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const RadioLabel = (props) => {
		return (
			<div>
				<Text variant="primary" size="lg">
					{props.val}% and Above
				</Text>
			</div>
		);
	};

	const getDiscount = (e) => {
		let discountObj = {};
		console.log('before genderObj', discountObj)
		discountObj = { 'discountPercent': e.target.value }
		console.log('after genderObj', discountObj)
		const queryparams = qs.stringify(discountObj);
		const parsedQueryParams = history.location.search;

		history.push(`/products${parsedQueryParams}&${queryparams}`);
	};

	const handleGenderSelection = (currentGender) => {
		setSelectedGender(currentGender);
		let genderObj = {};
		console.log('before genderObj', genderObj)
		genderObj = { 'gender': currentGender }
		console.log('after genderObj', genderObj)
		const queryparams = qs.stringify(genderObj);
		const parsedQueryParams = history.location.search;

		history.push(`/products${parsedQueryParams}&${queryparams}`);
	};
	return (
		<div>
			<div className='my-0'>
				{/* <Text weight={600} size="base" variant="secondary">
					GENDER
				</Text> */}
				<ul className="p-0 py-2 space-y-0 flex cursor-pointer">
					<li onClick={() => handleGenderSelection("men")}>
						<div
							className={
								selectedGender === "men"
									? "flex items-center space-x-6 rounded text-white bg-gray-900 transition duration-500 ease-in-out"
									: "flex items-center space-x-6"
							}
						>
							<div>
								<img src="/static/images/male.png" width="50" />
							</div>
							<small className='ml-6 pb-2 pt-2 pr-4'>MEN</small>
						</div>
					</li>
					<li onClick={() => handleGenderSelection("women")}>
						<div
							className={
								selectedGender === "women"
									? "flex items-center space-x-6 rounded text-white bg-gray-900 transition duration-500 ease-in-out"
									: "flex items-center space-x-6"
							}
						>
							<div>
								<img src="/static/images/female.png" width="50" />
							</div>
							<small className='ml-6 pb-2 pt-2 pr-4'>WOMEN</small>
						</div>
					</li>
				</ul>
			</div>
			<div className="my-5">
				<Divider variant="fullWidth" />
			</div>
			<div className="my-3">
				<Text weight={600} size="base" variant="secondary">
					PRICE
				</Text>
				<div className="mt-5">
					<div className={classes.root}>
						<Slider
							min={0}
							max={2000}
							value={value}
							onChange={handleChange}
							valueLabelDisplay="auto"
							aria-labelledby="range-slider"
							getAriaValueText={valuetext}
						/>
					</div>
					<div className="px-2 flex justify-between items-center">
						<div>
							<Text variant="primaryDark" weight="600" size="lg">
								&#8377;{value[0]}
							</Text>
						</div>

						<div>
							<Text variant="primaryDark" weight="600" size="lg">
								&#8377;{value[1]}+
					</Text>
						</div>
					</div>
					<div className='ml-32'>
					<Button  onClick={() => applyPriceFilter()} size='small' variant='primary' >
						Apply
					</Button>
					</div>
					
				</div>
			</div>
			<div className="my-5">
				<Divider variant="fullWidth" />
			</div>
			<div>
				<Grid container className="my-3">
					<Text weight={600} size="base" variant="secondary">
						DISCOUNT
					</Text>
				</Grid>
				<div className="p-4 h-full g-gray-100">
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
				</div>
			</div>
		</div>
	);
};

export default Filters;
