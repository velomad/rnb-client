import React from "react";
import Sk from "@material-ui/lab/Skeleton";

const Skeleton = () => {
	return (
		<div className="p-4 space-y-2">
			<Sk animation="pulse" variant="rect" height="12rem" />

			<div className="flex justify-between">
				<Sk animation="pulse" variant="text" height="3rem" width="150px" />
				<Sk animation="pulse" variant="text" height="3rem" width="80px" />
			</div>
			<Sk animation="pulse" variant="text" height="3rem" width="100%" />
			<Sk animation="pulse" variant="rect" height="8rem" />
			<div className="flex space-x-4">
				<Sk animation="pulse" variant="circle" height="6rem" width="6rem" />
				<Sk animation="pulse" variant="circle" height="6rem" width="6rem" />
				<Sk animation="pulse" variant="circle" height="6rem" width="6rem" />
			</div>
			<Sk animation="pulse" variant="rect" height="12rem" />
		</div>
	);
};

export default Skeleton;
