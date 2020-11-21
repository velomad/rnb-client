import React from "react";
import { ProductSpecs } from "./components";
const ProductPage = (props) => {
    console.log(props)

    const productId = props.match.params.productId
	return (
		<div>
            <div className='mb-8'>
                <ProductImgBanner />
            </div>
			<ProductSpecs productId={productId}/>
		</div>
	);
};

export default ProductPage;
