import React from "react";

import Story, { WithHeader } from "react-insta-stories";

const Stories = (props) => {
	const stories = [
		{ url: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ae.jpg" },
		{
			url: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/af.jpg",
		},
		{
			content: (props) => (
				<div className="mt-20">
					<img
						src="http://reachnbuy.unitechitsolution.in/AndroidClass/images/ae.jpg"
						className="object-fill"
					/>
				</div>
			),
		},
	];

	return (
		<Story
			stories={stories}
			defaultInterval={4000}
			currentIndex={2}
			width="100vw"
			height="100vh"
			// onAllStoriesEnd={}
		/>
	);
};

export default Stories;
