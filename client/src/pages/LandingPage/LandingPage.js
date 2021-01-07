import React, { useState, useEffect } from "react";
import { Slider, Text } from "../../components";
import { history } from "../../utils";
import {
	setStoriesPopUp,
	getSlider,
	getStories,
	getOffers,
	getNews,
} from "../../store/actions";
import { connect } from "react-redux";
import { WebsiteSlider, ProductSlider, StoriesPopUp } from "./components";

const LandingPage = (props) => {
	useEffect(() => {
		props.getSlider();
		props.getStories();
		props.getOffers();
		props.getNews();
	}, []);

	const loadStory = (val) => {
		props.setStoriesPopUp(true, val);
	};

	let sliderImages = [];

	props.sliderList.map((el) => {
		sliderImages.push(el.slider);
	});

	return (
		<div className="bg-gray-200">
			<WebsiteSlider />

			<div class="px-4 space-y-4">
				<div>
					<Text
						size="sm"
						variant="primaryDark"
						weight="700"
						classes="capitalize"
						isTitle={true}
						classes="uppercase"
					>
						Stories & Updates
					</Text>
				</div>
				<div>
					<div class="flex flex-row space-x-3 items-center overflow-auto w-full">
						{props.stories.map((el, index) => (
							<div onClick={() => loadStory(index)}>
								<div class="p-1 border-2 border-pink-600 rounded-full">
									<div class="w-16 h-16">
										<img
											className="rounded-full w-full h-full object-cover"
											width="100%"
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
			
{/* 
			<div className="px-4">
				<Text
					size="sm"
					weight="700"
					variant="primaryDark"
					isTitle={true}
					classes="uppercase"
				>
					Our Partners
				</Text>
			</div> */}

			{/* <div className="grid gap-2 grid-cols-1 md:grid-cols-2 py-4 p-1"
				onClick={() => history.push("/products/kanmani")}
			>
				<div>
					<img
						className="rounded-lg object-cover w-full"
						style={{ height: "12rem" }}
						src="https://img1.wsimg.com/isteam/ip/a07c92b5-a36f-447a-b131-469f99987059/857416867_122848.jpg/:/rs=w:1950,h:1200"
					/>
				</div>
			</div> */}

			<div className="bg-gray-100">
				<div className="py-4 px-4">
					<Text
						variant="primaryDark"
						weight="700"
						isTitle={true}
						size="sm"
						classes="uppercase"
					>
						Offers and promotions
					</Text>
				</div>
				<div className="py-8">
					<ProductSlider offers={props.offers} />
				</div>
			</div>

			<div className="bg-gray-100">
				<div className="px-4 py-2">
					<Text
						size="sm"
						weight="700"
						variant="primaryDark"
						isTitle={true}
						classes="uppercase"
					>
						News
					</Text>
				</div>
				<div className={`grid gap-2 grid-cols-2 md:grid-cols-2 py-4 p-1`}>
					{props.news.slice(0, 4).map((el, index) => (
						<div>
							<img
								className="rounded-lg object-cover w-full"
								style={{ height: "12rem" }}
								src={el.image}
							/>
						</div>
					))}
				</div>

				<div>
					<Slider
						productImages={sliderImages}
						spaceBetween={20}
						slidesPerView={3}
						pagination={true}
						loop={false}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						slidesPerViewMobile={1}
						spaceBetweenMobile={10}
						cardHeight={"h-56"}
					/>
				</div>

				<div className={`grid gap-2 grid-cols-1 md:grid-cols-2 py-4`}>
					{props.news.slice(4, props.news.length - 1).map((el, index) => (
						<div>
							<img
								className="rounded-lg object-cover w-full"
								style={{ height: "12rem" }}
								src={el.image}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ landingPageState }) => ({
	sliderList: landingPageState.sliders,
	stories: landingPageState.stories,
	offers: landingPageState.offers,
	news: landingPageState.news,
});

export default connect(mapStateToProps, {
	setStoriesPopUp,
	getSlider,
	getStories,
	getOffers,
	getNews,
})(LandingPage);
