import React from "react";
import { Text } from "../../../../components";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

const DiscountFilter = () => {
	const discounts = [10, 20, 30, 40, 50, 60, 70];

	return (
		<div className="p-4 h-full g-gray-100">
			<div className="py-4 space-y-6">
				{discounts.map((el) => (
					<div key={el} className=" flex space-x-4">
						<div>
							<DoneOutlinedIcon fontSize="small" className="text-pink-600" />
						</div>
						<div>
							<Text variant="primary" size="lg">
								{el}% and Above
							</Text>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default DiscountFilter;
