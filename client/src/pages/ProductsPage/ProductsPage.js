import React, { useEffect, useState } from "react";
import {
	Filters,
	Heading,
	Pagination,
	ProductCard,
	ProductSkeleton,
} from "./components";
import { connect } from "react-redux";
import {
	getProducts,
	setResetProducts,
	setBackFromSearch,
} from "../../store/actions";
import { history } from "../../utils";

const ProductsPage = (props) => {
	const [page, setPage] = useState(1);

	const getPage = (value) => {
		setPage(value);
	};

	useEffect(async () => {
		if (!props.isBack) {
			props.setResetProducts();
			await props.getProducts(page);
			props.setBackFromSearch(false);
		}
		{
			props.setBackFromSearch(false);
		}
	}, [history.location.search, page]);

	console.log(page);

	return (
		<React.Fragment>
			<div className="md:p-2">
				<div className="hidden md:block">
					<div className="border-b-2 p-4 py-4">
						<Heading
							category={props.category}
							totalProducts={props.totalProducts}
						/>
					</div>
				</div>
				<div className="md:grid gap-4 grid-cols-5">
					<div className="hidden md:block p-2">
						<Filters />
					</div>
					<div className="gap-4 border-l-2 col-span-4">
						{props.productsLoading === true ? (
							<ProductSkeleton />
						) : (
							<div>
								<div>
									<div class="grid gap-0 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 mb-6">
										{props.products.length > 0
											? props.products.map((e, index) => (
													<div
														class="p-4 w-full max-w-sm mx-auto rounded-md overflow-hidden"
														key={index}
													>
														<ProductCard
															id={e._id}
															image={e.imageUrl}
															website={e.website}
															price={e.productPrice}
															priceStrike={e.productPriceStrike}
															name={e.productName}
															brand={e.brandName}
															discount={e.discountPercent}
															rating={e.productRating}
														/>
													</div>
											  ))
											: null}
									</div>
								</div>
							</div>
						)}

						<div className="flex justify-center py-8">
							<Pagination
								totalProducts={props.totalProducts}
								setPageNumber={getPage}
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = ({ dataSkoreProductsState, uiState }) => ({
	products: dataSkoreProductsState.products,
	totalProducts: dataSkoreProductsState.totalProducts,
	isBack: uiState.isBackFromProductDetail,
	category: dataSkoreProductsState.category,
	productsLoading: dataSkoreProductsState.productsLoading,
});

export default connect(mapStateToProps, {
	getProducts,
	setResetProducts,
	setBackFromSearch,
})(ProductsPage);
