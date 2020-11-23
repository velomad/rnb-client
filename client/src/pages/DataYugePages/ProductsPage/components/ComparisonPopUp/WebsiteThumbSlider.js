import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

const WebsiteThumbSlider = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div>
			<Swiper thumbs={{ swiper: thumbsSwiper }} freeMode={true}>
				<React.Fragment>
					<SwiperSlide>
						<div>test ajayyy active</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>test sagar active</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>test epic acrtbve</div>
					</SwiperSlide>
				</React.Fragment>
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={3}
				freeMode={true}
				watchSlidesVisibility={true}
				watchSlidesProgress={true}
				breakpoints={{
					"@0.50": {
						slidesPerView: 3,
						spaceBetween: 10,
					},
				}}
			>
				<React.Fragment>
					<SwiperSlide>
						<div>test ajyyyy</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>test sagarrrrr</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>test epiccccc</div>
					</SwiperSlide>
				</React.Fragment>
			</Swiper>
		</div>
	);
};

export default WebsiteThumbSlider;
