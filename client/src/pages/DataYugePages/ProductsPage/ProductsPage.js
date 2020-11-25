import React from "react";
import axios from "axios";
import { ProductCard, ComparisonPopUp } from "./components";
import { Button } from "../../../components";
import {
	getElectronicProducts,
	setResetElectronicProducts,
} from "../../../store/actions";
import { connect } from "react-redux";
const ProductsPage = (props) => {
	var currentPage = 1;

	React.useEffect(async () => {
		await props.setResetElectronicProducts();
		props.getElectronicProducts(currentPage, props.match.params.category);
	}, [props.match.params.category]);

	const getMoreProducts = () => {
		currentPage += 1;
		props.getElectronicProducts(currentPage, props.match.params.category);
	};
	return (
		<React.Fragment>
			<div>
				<div class="grid gap-0 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 px-2 mb-6">
					{props.productData.map((el, index) => {
						return (
							<ProductCard
								key={index}
								epic={index}
								canCompare={el.can_compare}
								productId={el.product_id}
								productImage={el.product_image}
								productLink={el.product_link}
								productLowestPrice={el.product_lowest_price}
								productRating={el.product_rating}
								productTitle={el.product_title}
							/>
						);
					})}
				</div>
			</div>
			<div className="text-center mb-6">
				{/* {hasProducts ? ( */}
				<Button
					handleClick={() => getMoreProducts()}
					size="base"
					variant="primary"
					classes="w-32"
				>
					View More
				</Button>
				{/* ) : (<h4 className="font-bold text-gray-700">No More Products Found</h4> */}
				{/* )} */}
			</div>

			<ComparisonPopUp />
		</React.Fragment>
	);
};

const mapStateToProps = ({ dataYugeProductsState }) => ({
	productData: dataYugeProductsState.electronicProducts,
});

export default connect(mapStateToProps, {
	getElectronicProducts,
	setResetElectronicProducts,
})(ProductsPage);
