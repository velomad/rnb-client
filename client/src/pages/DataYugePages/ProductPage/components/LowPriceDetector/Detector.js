import React from "react";
import { Text } from "../../../../../components";

const Detector = (props) => {
	return (
		<React.Fragment>
			<div className="flex items-center justify-between p-4 ">
				<div>
					<img src={props.image} width="100px" />
				</div>

				<div className={`${props.index == 0 ? "" : ""}  outline-black p-2 `}>
					{/* <span class="animate-ping relative inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
					{props.index == 0 && (
						<span class=" absolute animate-ping right-4 transform -translate-y-4 inline-flex rounded-full h-3 w-3 pb-8 bg-pink-500"></span>
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
