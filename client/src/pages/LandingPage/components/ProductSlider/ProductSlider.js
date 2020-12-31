import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text } from "../../../../components";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductSlider = () => {
	const offers = [
		{
			id: "1",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/aaaaa.jpg",
			name: "Deal of day",
		},
		{
			id: "2",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/offer2.jpg",
			name: "Fashion",
		},
		{
			id: "3",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/offer3.jpg",
			name: "Coming Soon",
		},
		{
			id: "4",
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/offer4.jpg",
			name: "Free Shopping",
		},
	];

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
				{offers.map((el) => (
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
