import React from "react";
import { Text } from "../../../../../../../../components";
import data from "../../../../../../../../utils/lock.json";
import Lottie from "react-lottie";

const UnAuthenticatedUser = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: data,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="flex items-center text-center">
			<div>
				<Lottie
					options={defaultOptions}
					height={70}
					width={70}
					// isStopped={this.state.isStopped}
					// isPaused={this.state.isPaused}
				/>
			</div>
			<div>
				<Text
					size="sm"
					variant="white"
					classes="uppercase"
					isTitle={true}
					weight="700"
				>
					signup or login
				</Text>
			</div>
		</div>
	);
};

export default UnAuthenticatedUser;
