import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Text } from "../../../../components";
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
		history.push("/product/"+id)
	};

	return (
		<div className="my-3">
			<Grid container>
				<div
					onClick={handleProductClick}
					className="shadow-lg cursor-pointer rounded-lg"
					style={{
						width: "210px",
						height: "310px",
						position: "relative",
					}}
				>
					{discount && (
						<div className="absolute p-1 bg-gray-900 z-10">
							<Text size="xs" variant="white">
								{discount}
							</Text>
						</div>
					)}
					{/* <div onClick={handleWishList} className="absolute right-0 p-1">
						<Wishlist className="text-red-600" />
					</div> */}
					<div className="flex justify-center transition duration-700 ease-in-out transform hover:-translate-y-2">
						<img src={image} class="object-contain h-48 w-full" />
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
							<Grid container spacing={1}>
								<Grid item>
									<Text size="sm" weight="600">
										{price}
									</Text>
								</Grid>

								{price !== priceStrike && (
									<Grid item>
										<del className="text-gray-600">
											<Text size="sm" weight="600" variant="primary">
												{priceStrike}
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
											Rating :{rating}
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
