import React from "react";
import Sk from "@material-ui/lab/Skeleton";

const Skeleton = () => {
	const n = 12;

	return (
		<div className="grid grid-cols-4 gap-4 p-8">
			{[...Array(n)].map(() => (
				<div>
					<Sk
						animation="pulse"
						variant="rect"
						height="10rem"
						width="100%"
						className="rounded-md"
					/>
					<Sk variant="text" width="80%" />
					<Sk variant="text" width="30%" />
				</div>
			))}
		</div>
	);
};

export default Skeleton;
