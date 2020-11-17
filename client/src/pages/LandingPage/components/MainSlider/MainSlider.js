import React from "react";
import "./slider.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
				slidesPerView={5}
				autoplay={{
					delay: 2000,
				}}
				breakpoints={{
					// "@0.75": {
					// 	slidesPerView: 2,
					// 	spaceBetween: 20,
					// },
					// "@1.00": {
					// 	slidesPerView: 3,
					// 	spaceBetween: 40,
					// },
					"@1.50": {
						slidesPerView: 4,
						spaceBetween: 50,
					},
					"@0.0": {
						slidesPerView: 1,
						spaceBetween: 50,
					},
					"@0.50": {
						slidesPerView: 1,
						spaceBetween: 50,
					},
				}}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<div className="h-56 bg-gray-600">test</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
export default MainSlider;
