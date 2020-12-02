import React from "react";
import { ProductCard, Skeleton } from "./components";
import { Button, Text } from "../../../components";
import { history } from "../../../utils";
import {
	getElectronicProducts,
	setResetElectronicProducts,
} from "../../../store/actions";

import { connect } from "react-redux";

var currentPage = 1;

const ProductsPage = (props) => {
	let type = history.location.pathname.split("/")[
		history.location.pathname.split("/").length - 1
	];

	React.useEffect(async () => {
		await props.setResetElectronicProducts();
		currentPage = 1;
		props.getElectronicProducts(currentPage, props.match.params.category);
	}, [props.match.params.category, history.location.search]);

	const getMoreProducts = () => {
		currentPage += 1;
		console.log(currentPage);
		props.getElectronicProducts(currentPage, props.match.params.category);
	};
	return (
		<React.Fragment>
			{currentPage === 1 && props.productsLoading === true ? (
				<Skeleton />
			) : (
				<div>
					<div>
						<div class="grid gap-0 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 mb-6">
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
						{!props.isResults ? (
							type !== "search" && (
								<Button
									handleClick={() => getMoreProducts()}
									size="base"
									variant="primary"
									classes="w-32"
								>
									View More
								</Button>
							)
						) : (
							<div className=" h-96 p-16 flex">
								<div className="m-auto space-y-8">
									<div>
										<img src="/static/images/progress.svg" />
									</div>
									<div>
										<Text variant="primary" size="lg" classes="capitalize">
											Soon Getting more proucts for you.
										</Text>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = ({ dataYugeProductsState }) => ({
	productData: dataYugeProductsState.electronicProducts,
	isResults: dataYugeProductsState.endOfResults,
	productsLoading: dataYugeProductsState.electronicProductsLoading,
});

export default connect(mapStateToProps, {
	getElectronicProducts,
	setResetElectronicProducts,
})(ProductsPage);
