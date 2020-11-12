import React from "react";
import { Text } from "../../../../components";
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@material-ui/core";

const RadioLabel = (props) => {
	return (
		<div>
			<Text variant="primary" size="lg">
				{props.val}% and Above
			</Text>
		</div>
	);
};

const DiscountFilter = (props) => {
	const discounts = [10, 20, 30, 40, 50, 60, 70];

	const getDiscount = (e) => {
		props.getDiscountFilterValue(e.target.value);
	};

	return (
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
	);
};
export default DiscountFilter;
