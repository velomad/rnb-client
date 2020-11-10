import React from 'react';
import {Text} from '../../../../components';
import PriceSlider from './PriceSlider';

const PriceFilter = () => {
    return (
        <div className="p-4 h-full g-gray-100">
					<div>
						<Text variant="secondary" size="xl" weight="600">
							Price
						</Text>
					</div>
					<div>
						<Text variant="primary" size="lg" weight="500">
							Select the price range
						</Text>
					</div>
					<div className="py-10 px-8 flex justify-center">
						<PriceSlider />
					</div>
				</div>
    )
}

export default PriceFilter