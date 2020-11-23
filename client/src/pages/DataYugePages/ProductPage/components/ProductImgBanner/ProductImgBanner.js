import React from "react";
import { Slider } from "../../../../../components";

const ProductImgBanner = (props) => {
	return (
		<React.Fragment>
			<Slider
				spaceBetween={20}
				slidesPerView={3}
				pagination={false}
				loop={false}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				slidesPerViewMobile={1}
				spaceBetweenMobile={10}
				cardHeight={"h-48"}
				productImages={
					props.images.length > 1
						? [props.tempImg[0].product.productImage]
						: props.images
				}
			/>
		</React.Fragment>
	);
};

export default ProductImgBanner;
