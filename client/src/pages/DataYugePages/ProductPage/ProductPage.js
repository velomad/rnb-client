import React from "react";
import { ProductSpecs, ProductImgBanner } from "./components";
const ProductPage = (props) => {
	return (
		<div>
			<div className="mb-8">
				<ProductImgBanner />
			</div>
			<ProductSpecs />
		</div>
	);
};

export default ProductPage;
