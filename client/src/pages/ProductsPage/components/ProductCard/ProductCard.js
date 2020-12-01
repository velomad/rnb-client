import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Rating, Text } from "../../../../components";
import { history } from "../../../../utils";
import Wishlist from "@material-ui/icons/FavoriteBorderOutlined";

const ProductCard = ({
	image,
	website,
	price,
	priceStrike,
	name,
	brand,
	discount,
	rating,
	id,
}) => {
	const [wishList, setWishList] = useState(false);

	const handleWishList = () => {
		// setWishList(true);
		console.log("clicked");
	};

	const handleProductClick = () => {
		history.push("/product/" + id);
	};

	return (
		<div className="my-3">
			<Grid container>
				<div
					onClick={handleProductClick}
					style={{
						width: "210px",
						height: "320px",
						position: "relative",
					}}
				>
					{discount && (
						<div className="absolute p-1 bg-gray-900 z-10">
							<Text size="xs" variant="white">
								{discount}% Off
							</Text>
						</div>
					)}
					{/* <div onClick={handleWishList} className="absolute right-0 p-1">
						<Wishlist className="text-red-600" />
					</div> */}
					<div className="flex justify-center transition duration-700 ease-in-out transform hover:-translate-y-2">
						<img src={image} className="object-contain h-48 w-full" />
					</div>
					<div className="p-2">
						<div>
							<Text size="base" weight="600" variant="secondary">
								{brand}
							</Text>
						</div>
						<div
							style={{
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
							}}
						>
							<Text size="sm" weight="500" variant="primary">
								{name}
							</Text>
						</div>
						<div style={{ bottom: 0, position: "absolute" }}>
							<Grid container spacing={1} className="mt-4">
								<Grid item>
									<Text size="sm" weight="600">
										&#8377; {price}
									</Text>
								</Grid>

								{price !== priceStrike && (
									<Grid item>
										<del className="text-gray-600">
											<Text size="sm" weight="600" variant="primary">
												&#8377; {priceStrike}
											</Text>
										</del>
									</Grid>
								)}
							</Grid>
							<Grid container spacing={3}>
								<Grid item>
									<Text size="xs" variant="danger">
										{website}
									</Text>
								</Grid>
								{rating && (
									<Grid item>
										<Text size="xs" variant="primary">
											{Rating(rating)}
										</Text>
									</Grid>
								)}
							</Grid>
						</div>
					</div>
				</div>
			</Grid>
		</div>
	);
};
export default ProductCard;

// https://www.myntra.com/myntra-fashion-store?rf=Discount+Range%3A40.0_100.0_40.0+TO+100.0
// https://www.myntra.com/myntra-fashion-store?rf=Discount+Range%3A40.0_100.0_40.0+TO+100.0

{
	/* <path d="M4 6.215h4.962v2.43H4.505L4.13 9.858h4.764a3.05 3.05 0 01-.827 1.539 2.99 2.99 0 01-2.022.895l-1.361-.003a.304.304 0 00-.214.519l6.717 6.779 1.697-.004-6.107-6.16a4.193 4.193 0 002.14-1.167 4.256 4.256 0 001.198-2.398h2.474l.376-1.215h-2.799v-2.43h3.496V5H4v1.215zm12.389 10.028h1.337l-1.337 1.354v-1.354zm-.818 3.309c.23.09.488.04.663-.127l3.312-3.326a.567.567 0 000-.828.627.627 0 00-.574-.152H16.39v-5.043a.571.571 0 00-.58-.585.587.587 0 00-.587.597v8.935c0 .237.12.439.35.529z" fill="#282C3F"></path> */
}
