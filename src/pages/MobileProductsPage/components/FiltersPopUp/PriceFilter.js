import React, { useState } from "react";
import { Text } from "../../../../components";
import PriceSlider from "./PriceSlider";
import { connect } from "react-redux";

const PriceFilter = (props) => {
	let start = "";
	if ("productPrice[gte]" in props.parsedQueryParams) {
		start = props.parsedQueryParams["productPrice[gte]"];
	} else {
		start = 0;
	}

	let end = "";
	if ("productPrice[lte]" in props.parsedQueryParams) {
		end = props.parsedQueryParams["productPrice[lte]"];
	} else {
		end = 2000;
	}

	const [startValue, setStartValue] = useState(start);
	const [endValue, setEndValue] = useState(end);

	const sliderValue = (value) => {
		props.getPriceFilterValue({
			"productPrice[gte]": value[0],
			"productPrice[lte]": value[1],
		});
		setStartValue(value[0]);
		setEndValue(value[1]);
	};

	return (
		<div className="p-4 h-full g-gray-100 ">
			<div className="md:hidden">
				<Text variant="primary" size="lg" weight="500">
					Select the price range
				</Text>
			</div>

			{props.totalProducts !== "" && (
				<div>
					<Text variant="primaryDark" size="sm" weight="500">
						{props.totalProducts} Products
					</Text>
				</div>
			)}
			<div className="mt-10 px-4 flex justify-center">
				<PriceSlider getSliderValue={sliderValue} start={start} end={end} />
			</div>
			<div className="px-2 flex justify-between items-center">
				<div>
					<Text variant="primaryDark" weight="600" size="lg">
						&#8377;{startValue}
					</Text>
				</div>

				<div>
					<Text variant="primaryDark" weight="600" size="lg">
						&#8377;{endValue}+
					</Text>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ dataSkoreProductsState, uiState }) => ({
	totalProducts: dataSkoreProductsState.totalProducts,
});

export default connect(mapStateToProps)(PriceFilter);
