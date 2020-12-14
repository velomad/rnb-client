import React from "react";
import { Header, ProductCard, Skeleton } from "./components";
import { Button, Text } from "../../../components";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import {
	FiltersPopUp,
	FilterNav,
	SortingPopUp,
} from "../../../pages/MobileProductsPage/components";
import { history } from "../../../utils";
import {
	getElectronicProducts,
	setResetElectronicProducts,
} from "../../../store/actions";

import { connect } from "react-redux";

var currentPage = 1;

console.log(history.location.pathname);

const ProductsPage = (props) => {
	let type = history.location.pathname.split("/")[
		history.location.pathname.split("/").length - 1
	];

	React.useEffect(async () => {
		await props.setResetElectronicProducts();
		currentPage = 1;
		props.getElectronicProducts(currentPage, props.match.params.category);
	}, [history.location.search]);

	// props.match.params.category,

	const getMoreProducts = () => {
		currentPage += 1;
		console.log(currentPage);
		props.getElectronicProducts(currentPage, props.match.params.category);
	};
	return (
		<React.Fragment>
			<div className="p-2">
				<div className="hidden md:block">
					<div className="border-b-2 p-4 py-6 grid grid-cols-5">
						<Header categoryName={history.location.search.split("=")[1]} />
					</div>
				</div>
				<div className="md:grid gap-4 grid-cols-5">
					<div className="hidden md:block p-2">
						<div className="flex justify-between">
							<div>
								<Text variant="primary" classes="uppercase" size="sm">
									filters
								</Text>
							</div>
							<div>
								<div className="flex items-center">
									<DeleteOutlineOutlinedIcon
										fontSize="small"
										className="text-red-500"
									/>
									<Text
										weight={600}
										variant="danger"
										classes="uppercase"
										size="xs"
									>
										Clear All
									</Text>
								</div>
							</div>
						</div>
						akjhdas
					</div>
					<div className="gap-4 border-l-2 col-span-4">
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
										// type !== "search" && (
										<Button
											handleClick={() => getMoreProducts()}
											size="base"
											variant="primary"
											classes="w-32"
										>
											{props.productsLoading ? (
												<CircularProgress color="secondary" size="20px" />
											) : (
												"View More"
											)}
										</Button>
									) : (
										// )
										<div className=" h-96 p-16 flex">
											<div className="m-auto space-y-8">
												<div>
													<img src="/static/images/progress.svg" />
												</div>
												<div>
													<Text
														variant="primary"
														size="lg"
														classes="capitalize"
													>
														Soon Getting more proucts for you.
													</Text>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</div>

				<div className=" md:hidden ">
					{/* filter navigator */}
					{type !== "search" && <FilterNav />}
				</div>

				{/* popup for filter */}
				<FiltersPopUp />

				{/* popup for sorting */}
				<SortingPopUp />
			</div>
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
