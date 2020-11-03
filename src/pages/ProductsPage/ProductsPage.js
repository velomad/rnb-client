import React, { useEffect, useState } from "react";
import { Divider, Grid } from "@material-ui/core";
import { Button, Text } from "../../components";
import { Filters, Heading, Pagination, ProductCard } from "./components";
import Axios from "axios";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const res = await Axios.get(
			"https://reachnbuy.herokuapp.com/api/v1/products/flipkart?category=topwear&api_key=123&page=1&limit=20",
		);
		setProducts(res.data.data.result);
	};
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
													Casual T-shirt
												</h3>
												<span class="mt-3 text-sm text-gray-500">
													200+ Products
												</span>
												<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
													{products.map((e, index) => (
														<div
															class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
															key={index}
														>
															<ProductCard
																products={products}
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
													))}
												</div>
												{/* <div class="flex justify-center">
													<div class="flex rounded-md mt-8">
														<a
															href="#"
															class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
														>
															<span>Previous</span>
														</a>
														<a
															href="#"
															class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
														>
															<span>1</span>
														</a>
														<a
															href="#"
															class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
														>
															<span>2</span>
														</a>
														<a
															href="#"
															class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
														>
															<span>3</span>
														</a>
														<a
															href="#"
															class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
														>
															<span>Next</span>
														</a>
													</div> */}
												{/* </div> */}
											</div>
										</main>
									</div>
								</div>
							</div>
							{/* <div class="chat-footer flex-none">
								<div class="flex flex-row items-center p-4"></div>
							</div> */}
						</section>
					</main>
					<hr className="bg-gray-900" />
					<div className="flex justify-center py-8">
						<Pagination />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductsPage;