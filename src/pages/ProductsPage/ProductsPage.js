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
			"/api/v1/products/bewakoof?category=polo-t-shirts-men&api_key=123&page=1&limit=20",
		);
		setProducts(res.data.data.result);
	};
	return (
		<div>
			<div className="my-3">
				<Heading />
			</div>
			<hr style={{ color: "solid black 1px" }} />
			<Grid container>
				<Grid item xs={12} md={2}>
					<Filters />
				</Grid>
				<Grid item>
					<Divider orientation="vertical" variant="middle" />
				</Grid>
				<Grid item md={9}>
					<Grid container justify="space-between">
						{products.map((e, index) => (
							<Grid item 
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
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
			<hr style={{ color: "solid black 1px", marginTop: 15 }} />
			<div className="flex py-2 justify-center">
				<Pagination />
			</div>
		</div>
	);
};

export default ProductsPage;
