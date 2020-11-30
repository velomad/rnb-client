import React from "react";
import {Slider} from "../../../../../components";

const ProductImageSlider = ({productImages}) => {
	return (
		<div>
			<Slider
				productImages={productImages}
				spaceBetween={20}
				slidesPerView={3}
				pagination={true}
				loop={false}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				slidesPerViewMobile={1}
				spaceBetweenMobile={10}
				cardHeight={"h-56"}
			/>
		</div>
	);
};

export default ProductImageSlider;
