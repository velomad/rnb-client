import React, { useState, useEffect } from "react";
import { Text } from "../../../../components";

const GenderFilter = (props) => {
	const [selectedGender, setSelectedGender] = useState("");
	const [selectedFilter, setSelectedFilter] = useState("");

	useEffect(() => {
		if ("gender" in props.parsedQueryParams) {
			setSelectedFilter(props.parsedQueryParams.gender);
		}
	}, []);

	const handleGenderSelection = (Currentgender) => {
		setSelectedGender(Currentgender);
		props.setParentGender(Currentgender);
		setSelectedFilter("");
	};

	return (
		<div>
			<ul className="p-4 space-y-6">
				<li onClick={() => handleGenderSelection("men")}>
					<div
						className={
							selectedGender === "men" || selectedFilter === "men"
								? "flex items-center space-x-6 rounded text-white bg-gray-900 transition duration-500 ease-in-out"
								: "flex items-center space-x-6"
						}
					>
						<div className="p-4 flex items-center justify-around shadow-xl w-full rounded-xl">
							<div>
								<img src="/static/images/boy.svg" width="35px" />
							</div>
							<Text size="lg" classes="capitalize" isTitle={true}>
								men
							</Text>
						</div>
					</div>
				</li>
				<li onClick={() => handleGenderSelection("women")}>
					<div
						className={
							selectedGender === "women" || selectedFilter === "women"
								? "flex items-center space-x-6 rounded text-white bg-gray-900 transition duration-500 ease-in-out"
								: "flex items-center space-x-6"
						}
					>
						<div className="p-4 flex items-center justify-around shadow-xl w-full rounded-xl">
							<div>
								<img src="/static/images/female.svg" width="35px" />
							</div>
							<div>
								<Text size="lg" classes="capitalize" isTitle={true}>
									women
								</Text>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default GenderFilter;
