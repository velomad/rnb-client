import React from "react";
import "./slider.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text } from "../../../../components";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const MainSlider = () => {
	return (
		<div className="py-2">
			<Swiper
				spaceBetween={30}
				slidesPerView={4}
				autoplay={{
					delay: 2000,
				}}
				breakpoints={{
					"@0.0": {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					"@0.50": {
						slidesPerView: "auto",
						spaceBetween: 10,
					},
				}}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				// pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<div
						className="h-56"
						style={{
							backgroundImage: `url(/static/images/hypnotize.png)`,
						}}
					>
						<div className="px-6">
							<img src="/static/images/flipkart.png" width="70px" />
						</div>

						<div class="grid grid-cols-3 place-items-center gap-8">
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								1
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								2
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								3
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								4
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								5
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								6
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className="h-56"
						style={{
							backgroundImage: `url(/static/images/hypnotize.png)`,
						}}
					>
						<div className="px-6">
							<img src="/static/images/ajio.png" width="60px" />
						</div>

						<div class="grid grid-cols-3 place-items-center gap-8">
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								1
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								2
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								3
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								4
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								5
							</div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
								6
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-56 bg-gray-600">test</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
export default MainSlider;
