import React from "react";
import Sk from "@material-ui/lab/Skeleton";

const Skeleton = () => {
	const n = 8;

	return (
		<div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-2">
			{[...Array(n)].map(() => (
				<div>
					<Sk
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
