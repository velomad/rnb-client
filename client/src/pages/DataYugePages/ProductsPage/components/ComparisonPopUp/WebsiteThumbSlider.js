import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

const WebsiteThumbSlider = ({ stores }) => {
	console.log(stores);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div>
			<Swiper thumbs={{ swiper: thumbsSwiper }}>
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
				freeMode={true}
				slidesPerView={3}
				watchSlidesVisibility={true}
				watchSlidesProgress={true}
				breakpoints={{
					"@0.50": {
						slidesPerView: 3,
						spaceBetween: 10,
					},
				}}
			>
				{stores.map((el, index) =>
					Object.keys(el).map((elem) => (
						<React.Fragment key={index}>
							<SwiperSlide>
								<div class="p-1 rounded-full">
									<div class="w-20 h-20 rounded-full border-pink-500 border-2">
										<img
											class="shadow-md rounded-full w-full h-full object-contain "
											src={el[elem].product_store_logo}
										/>
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
