import React from "react";
import { Text } from "../../../../../components";

const Detector = (props) => {
	console.log(props.lowIndex);
	return (
		<React.Fragment>
			<div className="flex items-center justify-between p-4 ">
				<div>
					<img src={props.image} width="100px" />
				</div>

				<div
					className={`${
						props.index == 0 ? "" : ""
					}  border-dotted border-4 p-2 `}
				>
					{props.index == props.lowIndex && (
						<span class=" absolute animate-ping right-14 transform -translate-y-1 inline-flex rounded-sm h-6 w-12 pb-6 bg-pink-500"></span>
					)}
					<Text weight="600" variant="primary">
						&#8377; {props.price}
					</Text>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Detector;
