import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Text } from "../../../../../components";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

const WebsiteThumbSlider = ({ stores }) => {
	console.log(stores);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const handleBuyNowClick = (productLink) => {
		window.open(productLink, "_blank");
	};

	return (
		<div className="space-y-4">
			<Swiper
				className="grid grid-cols-3 place-content-center h-32"
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				autoplay={true}
				// freeMode={true}
				slidesPerView={3}
				loop={false}
				// centeredSlides={true}
				watchSlidesVisibility={true}
				watchSlidesProgress={true}
				breakpoints={{
					"@0.50": {
						centeredSlides: false,
						slidesPerView: 3,
						spaceBetween: 10,
					},
				}}
			>
				{stores.map((el, index) =>
					Object.keys(el).map((elem) => (
						<React.Fragment key={index}>
							<SwiperSlide className="place-self-center">
								<div class="p-1 rounded-full ml-2">
									<div
										className="p-1 rounded-full ring-2 ring-pink-600 border-2"
										style={{ height: "5rem", width: "5rem" }}
									>
										<img
											className="shadow-md rounded-full w-full h-full object-contain"
											src={el[elem].product_store_logo}
										/>
									</div>
								</div>
							</SwiperSlide>
						</React.Fragment>
					)),
				)}
			</Swiper>

			<Swiper thumbs={{ swiper: thumbsSwiper }} spaceBetween={20}>
				{stores.map((el, index) =>
					Object.keys(el).map((elem) => (
						<React.Fragment key={index}>
							<SwiperSlide>
								<div
									className="p-4 space-y-5"
									style={
										window.innerWidth > 769 ?
									{

										width: '100%',
										backgroundImage: `url(/static/images/gplaypattern.png)`
									} : {
										backgroundImage: `url(/static/images/gplaypattern.png)`,
										height: "30rem",
									}}

									
								>
									<div className="flex justify-between">
										{/* <Text variant="primaryDark" size="lg" isTitle={true} classes="uppercase">
											{el[elem].product_store}
										</Text> */}
										<img src={el[elem].product_store_logo} width="100px" />
										<div>
											<Text variant="primary" size="sm">
												{el[elem].is_cod === "1"
													? "Cash on delivery available"
													: ""}
											</Text>
											<Text
												variant="primary"
												classes="block text-right"
												size="sm"
											>
												{el[elem].is_emi === "1" ? "EMI available" : ""}
											</Text>
										</div>
									</div>
									<div className="flex space-x-6">
										&#8377; &nbsp;{" "}
										<Text variant="primary" size="md" weight="600">
											{el[elem].product_price}
										</Text>
										<del>
											&#8377;&nbsp;{" "}
											<Text variant="primary" size="md" weight="600">
												{el[elem].product_mrp}
											</Text>
										</del>
									</div>
									<div className="flex space-x-6 items-center">
										<Text variant="primary" size="md">
											Available colours
										</Text>
										<div
											className={`h-6 w-6 rounded-full shadow-xl border-2`}
											style={{ backgroundColor: el[elem].product_color }}
										></div>
									</div>
									<div className="flex justify-between">
										<div className="display-block text-center">
											<div>
												<Text variant="primaryDark" size="md">
													Product Delivery
												</Text>
											</div>
											<div>
												<Text variant="primary" size="md">
													{el[elem].product_delivery} Days
												</Text>
											</div>
										</div>
										<div className="display-block text-center">
											<div>
												<Text variant="primaryDark" size="md">
													Delivery Cost
												</Text>
											</div>
											<div>
												<Text variant="primary" size="md">
													{el[elem].product_delivery_cost == 0 ? (
														<span className="text-green-500">FREE</span>
													) : (
														el[elem].product_delivery_cost
													)}
												</Text>
											</div>
										</div>
									</div>

									<div className="flex justify-between items-center">
										{/* {el[elem].return_time !== "" ? ( */}
										<div className="flex space-x-4">
											<Text variant="primaryDark" size="md">
												Return Time:
											</Text>
											<Text variant="primary" size="md">
												{el[elem].return_time !== ""
													? el[elem].return_time
													: "N/A"}
											</Text>
										</div>
										{/* ) : null} */}
										<div>
											<Button
												size="base"
												variant="primary"
												handleClick={(productLink) =>
													handleBuyNowClick(el[elem].product_store_url)
												}
											>
												Buy Now
											</Button>
										</div>
									</div>
									<div>
										<Text variant="primary" size="md">
											{el[elem].product_offer}
										</Text>
									</div>
								</div>
							</SwiperSlide>
						</React.Fragment>
					)),
				)}
			</Swiper>
		</div>
	);
};

export default WebsiteThumbSlider;
