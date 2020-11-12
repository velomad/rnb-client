import React, { useState } from "react";

const GenderFilter = (props) => {
	const [selectedGender, setSelectedGender] = useState('');

	const handleGenderSelection = (Currentgender) => {
		setSelectedGender(Currentgender);
		props.setParentGender(Currentgender);
	};

	return (
		<div>
			<ul className="p-4 py-4 space-y-6">
				<li onClick={() => handleGenderSelection("men")}>
					<div className={selectedGender === 'men'?"flex items-center space-x-6 rounded text-white bg-pink-500 transition duration-500 ease-in-out" : "flex items-center space-x-6"} >
						<div>
							<img src="/static/images/male.png" width="50" />
						</div>
						<div>MEN</div>
					</div>
				</li>
				<li onClick={() => handleGenderSelection("women")}>
					<div className={selectedGender === 'women'?"flex items-center space-x-6 rounded text-white bg-pink-500 transition duration-500 ease-in-out" : "flex items-center space-x-6"}>
						<div>
							<img src="/static/images/female.png" width="50" />
						</div>
						<div>WOMEN</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default GenderFilter;
