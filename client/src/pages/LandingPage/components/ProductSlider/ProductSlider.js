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
	return (
		<div>
			<Swiper
				spaceBetween={20}
				slidesPerView={3}
				
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction:false
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
				<SwiperSlide>
					<div
						className="relative"
						style={{
							height: "8rem",
							width: "100%",
							borderRadius: 5,
							background: "rgba(0,0,0,0.6)",
							backgroundImage: `url(/static/images/amazonicon.png)`,
							backgroundSize: "contain, cover",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="absolute bottom-0">
							<Text size="md" variant="white">
								PRODUCT NAME
							</Text>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						style={{
							height: "8rem",
							borderRadius: 5,

							width: "100%",
							backgroundImage: `url(/static/images/gplaypattern.png)`,
						}}
					>
						2
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						style={{
							height: "8rem",
							borderRadius: 5,

							width: "100%",
							backgroundImage: `url(/static/images/gplaypattern.png)`,
						}}
					>
						2
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						style={{
							borderRadius: 5,
							height: "8rem",
							width: "100%",
							backgroundImage: `url(/static/images/gplaypattern.png)`,
						}}
					>
						2
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ProductSlider;
