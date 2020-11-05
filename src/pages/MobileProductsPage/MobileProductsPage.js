import React, { useState, useEffect } from "react";
import Axios from "axios";
import MobileProductCard from "./components/MobileProductCard";
import { FilterNav, FiltersPopUp, SortingPopUp } from "./components";
import { connect } from "react-redux";
import { getProducts, setProductCategoryChange } from "../../store/actions";
import { history } from "../../utils";
import InfiniteScroll from "react-infinite-scroll-component";

const MobileProductsPage = (props) => {
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	var pathName = history.location.pathname.split("/");
	var search = history.location.search.split("=");

	const category = search[search.length - 1];
	const website = pathName[pathName.length - 1];

	const fetchMoreData = () => {
		if (props.products >= props.totalProducts) {
			setHasMore(false);
			return;
		}

		setPage(page + 1);

		props.getProducts(website, category, page);
	};

	useEffect(() => {
		props.getProducts(website, category, page);
	}, [category]);

	return (
		<div>
			<InfiniteScroll
				className="grid grid-cols-2"
				dataLength={props.products.length}
				next={fetchMoreData}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
			>
				{props.products.map((e, index) => (
					<div
						className="overflow-hidden"
						style={{ borderRight: "solid #ccc 0px" }}
						key={index}
					>
						<MobileProductCard
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
			</InfiniteScroll>

			{/* filter navigator */}
			<FilterNav />

			{/* popup for filter */}
			<FiltersPopUp />

			{/* popup for sorting */}
			<SortingPopUp />
		</div>
	);
};

const mapStateToProps = ({ dataSkoreProductsState }) => ({
	products: dataSkoreProductsState.products,
	totalProducts: dataSkoreProductsState.totalProducts,
	category: dataSkoreProductsState.category,
});

export default connect(mapStateToProps, {
	getProducts,
	setProductCategoryChange,
})(MobileProductsPage);
