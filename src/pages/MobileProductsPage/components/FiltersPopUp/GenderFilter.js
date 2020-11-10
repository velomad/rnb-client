import React, { useState } from "react";

const GenderFilter = () => {

	return (
		<div>
			<ul className="p-4 py-4 space-y-6">
				<li>
					<div className=" flex items-center space-x-6">
						<div>
							<img src="/static/images/male.png" width="50" />
						</div>
						<div>MEN</div>
					</div>
				</li>
				<li>
					<div className=" flex items-center space-x-6">
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
