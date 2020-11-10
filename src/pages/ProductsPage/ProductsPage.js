import React, { useEffect, useState } from "react";
import { Filters, Heading, Pagination, ProductCard, ProductSkeleton } from "./components";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions";
import { history } from "../../utils";

const ProductsPage = (props) => {
	const [page, setPage] = useState(1);
	// var pathName = history.location.pathname.split("/");
	// var search = history.location.search.split("=");

	// const category = search[search.length - 1];
	// const website = pathName[pathName.length - 1];

	// var pathName = history.location.pathname.split("/");
	var search = history.location.search.split("=");

	
	const website = search[1].split("&")[0]
	const category = search[search.length - 1]


	useEffect(() => {
		props.getProducts(website, category, page);
	}, [category, website]);

	return (
		<React.Fragment>
			<div class="h-screen w-full flex antialiased bg-white overflow-hidden">
				<div class="flex-1 flex flex-col">
					<div className="py-4">
						<Heading />
					</div>
					<hr className="bg-gray-100" />
					<main class="flex-grow flex flex-row min-h-0 ">
						<section class="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-1/6 transition-all duration-300 ease-in-out">
							<div class="contacts p-2 flex-1 overflow-y-scroll">
								<Filters />
							</div>
						</section>
						<section class="flex flex-col flex-auto border-l border-gray-400">
							<div class="chat-body p-4 flex-1 overflow-y-scroll">
								<div class="flex flex-row">
									<div class="w-8 h-8 relative flex flex-shrink-0 mr-4"></div>
									<div>
										<main class="my-0">
											<div class="container mx-auto px-6">
												<h3 class="text-gray-700 text-2xl font-medium">
													{props.category}
												</h3>
												<span class="mt-3 text-sm text-gray-500">
													{props.totalProducts - 5}+ Products
												</span>
												<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
													{
														props.products.length > 0?
														props.products.map((e, index) => (
															<div
																class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
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
														: <ProductSkeleton />
													}
												</div>
											</div>
										</main>
									</div>
								</div>
							</div>
						</section>
					</main>
					<hr className="bg-gray-900" />
					<div className="flex justify-center py-8">
						<Pagination totalProducts = {props.totalProducts}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = ({ dataSkoreProductsState }) => ({
	products: dataSkoreProductsState.products,
	totalProducts: dataSkoreProductsState.totalProducts,
	category: dataSkoreProductsState.category,
});

export default connect(mapStateToProps, { getProducts })(ProductsPage);
