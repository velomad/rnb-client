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
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<div className="h-56 bg-gray-600">test</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-56 bg-gray-600">test</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-56 bg-gray-600">test</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
export default MainSlider;
