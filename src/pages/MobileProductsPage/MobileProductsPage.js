import React, { useState, useEffect } from "react";
import Axios from "axios";
import MProductCard from "./components/MobileProductCard";
import { FilterNav, FiltersPopUp, SortingPopUp } from "./components";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions";
import {history} from '../../utils';

const MobileProductsPage = (props) => {

var test = history.location.pathname.split("/")
var tes = history.location.search.split("=")

const category = tes[tes.length-1]
const website = test[test.length-1]

	useEffect(() => {
		props.getProducts(website, category, 1);
	}, [category]);

	return (
		<div className="grid grid-cols-2">
			{props.products.map((e, index) => (
				<div
					className="overflow-hidden"
					style={{ borderRight: "solid #ccc 0px" }}
					key={index}
				>
					<MProductCard
						products={props.products}
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


export default connect(mapStateToProps, { getProducts })(MobileProductsPage);
