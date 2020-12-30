import React from "react";
import { Text } from "../../../../../../../../components";

const AuthenticatedUser = () => {
	return (
		<div className="flex justify-between items-center">
			<div>
				<div
					src=""
					className="rounded-full bg-gray-200 h-20 w-20"
					width="60"
					height="60"
				/>
			</div>
			<div className="flex-column">
				<div>
					<Text size="xl2" variant="white" classes="capitalize">
						welcome,
					</Text>
				</div>
				<div>
					<Text size="lg" variant="white" classes="capitalize">
						sagar
					</Text>
				</div>
			</div>
		</div>
	);
};

export default AuthenticatedUser;
