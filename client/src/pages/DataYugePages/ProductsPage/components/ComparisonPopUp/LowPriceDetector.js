import React from "react";
import { Text } from "../../../../../components";

const LowPriceDetector = (props) => {
	return (
		<React.Fragment>
			<div className="flex items-center justify-between p-4">
				<div>
					<img src={props.image} width="100px" />
				</div>
				<div
					className={`${
						props.index == 0 ? "" : ""
					} outline-black p-2 `}
				>
					<Text weight="600" variant="primary">
						&#8377; {props.price}
					</Text>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LowPriceDetector;
