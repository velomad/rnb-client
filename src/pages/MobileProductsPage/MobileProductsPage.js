import React, { useState, useEffect } from "react";
import Axios from "axios";
import MProductCard from "./components/MobileProductCard";
import { BottomNav, FiltersPopUp, SortingPopUp } from "./components";

const MobileProductsPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const res = await Axios.get(
			"https://reachnbuy.herokuapp.com/api/v1/products/ajio?category=shirts&api_key=123&page=1&limit=20",
		);
		setProducts(res.data.data.result);
	};

	return (
		<div className="grid grid-cols-2">
			{products.map((e, index) => (
				<div
					className="shadow-lg overflow-hidden"
					style={{ borderRight: "solid #ccc 0px" }}
					key={index}
				>
					<MProductCard
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
			<BottomNav />
			{/* <FiltersPopUp /> */}
			<SortingPopUp />
		</div>
	);
};

export default MobileProductsPage;
