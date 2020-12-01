import React from "react";
import Sk from "@material-ui/lab/Skeleton";

const Skeleton = () => {
	return (
		<div className="p-4 space-y-4">
			<Sk variant="react" animation="pulse" height={"25rem"} />
			<Sk variant="text" animation="pulse" height={"2rem"} width="50%" />
			<Sk variant="text" animation="pulse" height={"2rem"} width="75%" />

			<div className="flex space-x-4">
				<Sk variant="circle" animation="pulse" height={"3rem"} width="3rem" />
				<Sk variant="circle" animation="pulse" height={"3rem"} width="3rem" />
				<Sk variant="circle" animation="pulse" height={"3rem"} width="3rem" />
				<Sk variant="circle" animation="pulse" height={"3rem"} width="3rem" />
				<Sk variant="circle" animation="pulse" height={"3rem"} width="3rem" />
			</div>
			<div className="flex justify-between items-center">
				<div className="flex space-x-4">
					<Sk variant="text" animation="pulse" height={"2rem"} width="50px" />
					<Sk variant="text" animation="pulse" height={"2rem"} width="50px" />
				</div>
				<div>
					<Sk variant="text" animation="pulse" height={"2rem"} width="50px" />
				</div>
			</div>
		</div>
	);
};

export default Skeleton;
