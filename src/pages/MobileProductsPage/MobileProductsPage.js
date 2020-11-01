import React, { useState, useEffect } from "react";
import { Divider, Grid } from "@material-ui/core";
import { Text } from "../../components";
import ProductCard from "../ProductsPage/components/ProductCard/ProductCard";
import Axios from "axios";
import MProductCard from "./components/MobileProductCard";

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
					className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
					style={{ borderRight: "solid #ccc 1px" }}
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
		</div>
	);
};

export default MobileProductsPage;
