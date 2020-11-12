import React, { useState } from "react";
import { Text } from "../../../../components";
import PriceSlider from "./PriceSlider";

const PriceFilter = (props) => {
	const [startValue, setStartValue] = useState(0);
	const [endValue, setEndValue] = useState(20000);

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
			<div>
				<Text variant="primaryDark" size="sm" weight="500">
					1584+ Products
				</Text>
			</div>
			<div className="mt-10 px-8 flex justify-center">
				<PriceSlider getSliderValue={sliderValue} />
			</div>
			<div className="px-8 flex justify-between">
				<div>
					<Text variant="primaryDark" weight="600" size="xl">
						&#8377;{startValue}
					</Text>
				</div>

				<div>
					<Text variant="primaryDark" weight="600" size="xl">
						&#8377;{endValue}+
					</Text>
				</div>
			</div>
		</div>
	);
};

export default PriceFilter;
