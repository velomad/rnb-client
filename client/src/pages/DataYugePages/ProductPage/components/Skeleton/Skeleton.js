import React from "react";
import Sk from "@material-ui/lab/Skeleton";

const Skeleton = () => {
	return (
		<div className="p-4 space-y-2">
			<Sk animation="pulse" variant="rect" height="8rem" className="rounded-md"/>

			<div className="flex justify-between">
				<Sk animation="pulse" variant="text" height="2rem" width="150px" className="rounded-md"/>
				<Sk animation="pulse" variant="text" height="2rem" width="80px" className="rounded-md"/>
			</div>
			<Sk animation="pulse" variant="text" height="2rem" width="100%" className="rounded-md"/>
			<Sk animation="pulse" variant="rect" height="5rem" className="rounded-md"/>
			<div className="flex justify-between">
				<Sk animation="pulse" variant="circle" height="5rem" width="5rem" />
				<Sk animation="pulse" variant="circle" height="5rem" width="5rem" />
				<Sk animation="pulse" variant="circle" height="5rem" width="5rem" />
			</div>
			<Sk animation="pulse" variant="rect" height="8rem" className="rounded-md"/>
		</div>
	);
};

export default Skeleton;
