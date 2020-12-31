import React, { useState } from "react";
import { Text } from "../../components";
import { setStoriesPopUp } from "../../store/actions";
import { connect } from "react-redux";
import { WebsiteSlider, ProductSlider, StoriesPopUp } from "./components";

const LandingPage = (props) => {
	const loadStory = (val) => {
		console.log(val);
	};

	const stories = [
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/aa.png",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ab.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ac.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ad.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ae.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/af.jpg",
		},
		{
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/c11ad7bd236925f6c1b71d9cc9dc3087.gif",
		},
	];

	return (
		<div className="bg-gray-200">
			<WebsiteSlider />

			<div class="px-4 pb-4 space-y-4">
				<div>
					<Text
						size="sm"
						variant="primaryDark"
						weight="700"
						classes="capitalize"
					>
						Stories & Updates
					</Text>
				</div>
				<div onClick={() => props.setStoriesPopUp(true)}>test</div>
				<div>
					<div class="flex flex-row space-x-3 items-center overflow-auto w-full">
						{stories.map((el, index) => (
							<div onClick={() => loadStory(index)}>
								<div class="p-1 border-2 border-white rounded-full">
									<div class="w-16 h-16 ">
										<img
											className="rounded-full"
											src={el.image}
											alt=""
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<StoriesPopUp />

			{/* <div className="grid gap-2 grid-cols-2 md:grid-cols-2 py-4 p-1">
				<div>
					<img
						className="rounded-lg object-cover w-full"
						style={{ height: "12rem" }}
						src="static/images/clothing.jpg"
					/>
				</div>
				<div>
					<img
						className="rounded-lg object-cover w-full"
						style={{ height: "12rem" }}
						src="static/images/electronic.jpg"
					/>
				</div>
			</div> */}
			{/* <div
				className="bg-gray-100"
				// style={{
				// 	backgroundImage: `url(/static/images/tex.jpg)`,
				// 	backgroundSize:"100%",
				// 	backgroundRepeat:"no-repeat"
				// }}
			>
				<div className="py-4 px-4">
					<Text
						variant="primaryDark"
						weight="600"
						isTitle={true}
						size="sm"
						classes="uppercase"
					>
						mobiles & accessories
					</Text>
				</div>
				<div className="py-12">
					<ProductSlider />
				</div>
			</div> */}
		</div>
	);
};
export default connect(null, { setStoriesPopUp })(LandingPage);
