import React from "react";
import "./slider.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text } from "../../../../components";
import { data } from "./data";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const MainSlider = () => {
	return (
		<div className="">
			<Swiper
				spaceBetween={20}
				slidesPerView={2}
				autoplay={{
					delay: 5000,
				}}
				breakpoints={{
					"@0.50": {
						slidesPerView: 1,
						spaceBetween: 10,
					},
				}}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				// pagination={{ clickable: true }}
			>
				{data.map((el) => (
					<SwiperSlide>
						<div
							className="py-4"
							style={{
								backgroundImage: `url(/static/images/hypnotize.png)`,
							}}
						>
							<div className="flex  items-center">

							<div className="px-6">
								<img src={el.websiteImage} width="40px" />
							</div>
							<div className={el.styles}>
								<Text>
									{el.websiteName}
								</Text>
							</div>
							</div>

							<div className="grid grid-cols-3 place-items-center space-y-8">
								{el.circles.map((circle) => (
									<div class="p-1 border-2 border-pink-500 rounded-full mt-8">
										<div class="hoverable w-16 h-16 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-contain"
												src={circle}
												alt=""
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			test
		</div>
	);
};
export default MainSlider;
