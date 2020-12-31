import React, { useState, useEffect } from "react";
import { Slider, Text } from "../../components";
import { setStoriesPopUp , getSlider} from "../../store/actions";
import { connect } from "react-redux";
import { WebsiteSlider, ProductSlider, StoriesPopUp } from "./components";

const LandingPage = (props) => {


	useEffect(() => {
		// props.getSlider()
	},[])

	const loadStory = (val) => {
		props.setStoriesPopUp(true, val);
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

	const news = [
		{
			id: "1",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/aabbcf2e28a0e1f64065657be3447ad7.jpg",
			link:
				"https://www.myntra.com/sports-shoes/action/action-men-charcoal-grey-self-design-running-shoes/11344366/buy",
		},
		{
			id: "2",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/92343ebd8e3f69a594178f0b48e2dd94.jpg",
			link:
				"https://www.myntra.com/sports-shoes/action/action-men-charcoal-grey-self-design-running-shoes/11344366/buy",
		},
		{
			id: "3",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/a11ea876d4e7638352acac6201b35127.jpg",
			link:
				"https://www.myntra.com/sports-shoes/action/action-men-charcoal-grey-self-design-running-shoes/11344366/buy",
		},
		{
			id: "4",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/c7f96a5ef697096e91c5f4d5ac257932.png",
			link:
				"https://www.myntra.com/sports-shoes/action/action-men-charcoal-grey-self-design-running-shoes/11344366/buy",
		},
		{
			id: "5",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/3261557feb3c1bececdcbe7884d62c09.jpg",
			link:
				"https://www.myntra.com/sports-shoes/action/action-men-charcoal-grey-self-design-running-shoes/11344366/buy",
		},
		{
			id: "6",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/839c4465a018e3f2b6eb2d06a4f4f7de.jpg",
			link:
				"https://www.myntra.com/sports-shoes/action/action-men-charcoal-grey-self-design-running-shoes/11344366/buy",
		},
		{
			id: "7",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/e2b4a944cea0bb893bd66f3ed87e2fe1.jpg",
			link:
				"https://www.myntra.com/sports-shoes/action/action-men-charcoal-grey-self-design-running-shoes/11344366/buy",
		},
	];

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
						{stories.map((el, index) => (
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

			{/* https://a07c92b5-a36f-447a-b131-469f99987059.mysimplestore.com/api/v2/products?page_fallback=true&app=vnext&page=255&per_page=16&q[descend_by_popularity]=true&timestamp=1609412596868 */}

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
			</div>

			<div className="grid gap-2 grid-cols-1 md:grid-cols-2 py-4 p-1">
				<div>
					<img
						className="rounded-lg object-cover w-full"
						style={{ height: "12rem" }}
						src="https://img1.wsimg.com/isteam/ip/a07c92b5-a36f-447a-b131-469f99987059/857416867_122848.jpg/:/rs=w:1950,h:1200"
					/>
				</div>
			</div>

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
					<ProductSlider />
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
					{news.slice(0, 4).map((el, index) => (
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
					{news.slice(4, news.length - 1).map((el, index) => (
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
});

export default connect(mapStateToProps, { setStoriesPopUp, getSlider })(LandingPage);
