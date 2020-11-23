import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text } from '../../../../../components';
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

const WebsiteThumbSlider = ({ stores }) => {
	console.log(stores);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	// 	flipkart:
	// is_cod: "1"
	// is_emi: "0"
	// product_color: "white"
	// product_delivery: "3-5"
	// product_delivery_cost: "0"
	// product_mrp: "3240"
	// product_offer: ""
	// product_price: "2499"
	// product_store: "Flipkart"
	// product_store_logo: "https://images-api.datayuge.in/image/ZmxpcGthcnRfc3RvcmUucG5n.png"
	// product_store_url: "https://dl.flipkart.com/dl/orient-wendy-3-blade-ceiling-fan/p/itmdwufxecghveg5?pid=FANEFKJZFVHYEMEX&affid=arunbabul"
	// return_time: "10 Days"
	return (
		<div>
			<Swiper thumbs={{ swiper: thumbsSwiper }}>
				{stores.map((el, index) =>
					Object.keys(el).map((elem) => (
						<React.Fragment key={index}>
							<SwiperSlide>
								<div className='p-2'>
									<div className="flex justify-between">
										<Text variant="primaryDark" size="lg">{el[elem].product_store}</Text>
										<div>
											<Text variant="primaryDark" size="sm">{el[elem].is_cod === '1' ? 'Cash on delivery available' : ""}</Text>
											<Text variant="primaryDark" classes="block text-right" size="sm">{el[elem].is_emi === '1' ? 'EMI available' : ""}</Text>
										</div>
									</div>
									<div className='flex space-x-6'>
										&#8377; &nbsp; <Text variant="primary" size="md">{el[elem].product_price}</Text>
										<del>
											&#8377;&nbsp; <Text variant="primary" size="md">{el[elem].product_mrp}</Text>
										</del>
									</div>
									<div className='flex space-x-6 items-center'>
										<Text variant="primary" size="md">Available colours</Text>
										<div className={`h-6 w-6 rounded-full shadow-xl`} style={{ backgroundColor: el[elem].product_color }}>
										</div>
									</div>
									<div className='flex space-x-6'>
										<Text variant="primary" size="md">Product Delivery: {el[elem].product_delivery}</Text>
										<Text variant="primary" size="md">Product Delivery Cost: {el[elem].product_delivery_cost}</Text>
									</div>
									<div className='flex space-x-6'>
										<Text variant="primary" size="md">Return Time: {el[elem].return_time}</Text>
										<Text variant="primary" size="md">Product Offer: {el[elem].product_offer}</Text>
									</div>
								</div>
							</SwiperSlide>
						</React.Fragment>
					)),
				)}
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
