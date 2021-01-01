import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text } from "../../../../components";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductSlider = (props) => {

	return (
		<div>
			<Swiper
				spaceBetween={20}
				slidesPerView={3}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
					"@0.75": {
						centeredSlides: true,
						slidesPerView: 2,
						spaceBetween: 10,
					},
					"@0.50": {
						centeredSlides: true,
						slidesPerView: 2,
						spaceBetween: 10,
					},
				}}
			>
				{props.offers.map((el) => (
					<SwiperSlide>
						<div
							className="relative"
							style={{
								height: "8rem",
								width: "100%",
								borderRadius: 5,
								background: "rgba(0,0,0,0.8)",
								backgroundImage: `url(${el.image})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductSlider;
