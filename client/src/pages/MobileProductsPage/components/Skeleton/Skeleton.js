import React from "react";
import Sk from "@material-ui/lab/Skeleton";

const Skeleton = () => {
	const n = 8;

	return (
		<React.Fragment>
			{[...Array(n)].map(() => (
				<div className="p-2">
					<Sk
						variant="rect"
						height="10rem"
						width="100%"
						className="rounded-md"
					/>
					<Sk variant="text" width="50%" />
					<Sk variant="text" width="100%" />
					<Sk variant="text" width="30%" />
				</div>
			))}
		</React.Fragment>
	);
};

export default Skeleton;
