import React, { useState } from "react";
import { Text } from "../../../../components";
import PriceSlider from "./PriceSlider";

const PriceFilter = () => {
    const [startValue, setStartValue] = useState(0)
    const [endValue, setEndValue] = useState(100)

    const sliderValue = (value) => {
        console.log(value)
        setStartValue(value[0])
        setEndValue(value[1])
    } 

	return (
		<div className="p-4 h-full g-gray-100 ">
			<div>
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
				<PriceSlider getSliderValue={sliderValue}/>
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
