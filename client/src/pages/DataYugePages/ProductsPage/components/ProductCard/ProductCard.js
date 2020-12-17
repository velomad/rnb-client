import React, { useState } from "react";
import { Text, Button, Rating } from "../../../../../components";
import { history } from "../../../../../utils";
import { setCompareProduct } from "../../../../../store/actions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PriceCheck from "./PriceCheck";
import { Link } from "react-router-dom";
import ProductsPage from "../../ProductsPage";
import { connect } from "react-redux";
import { Dialog, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductPage from "../../../ProductPage/DesktopProductPage";

const useStyles = makeStyles((theme) => ({
	dialogPaper: {
		width: "36%",
	},
}));
const ProductCard = ({
	canCompare,
	productId,
	productImage,
	productLink,
	productLowestPrice,
	productRating,
	productTitle,
	epic,
	setCompareProduct,
}) => {
	const [productID, setProductID] = React.useState("");
	const handleClose = () => {
		setOpenSlider(false);
	};

	const [openSlider, setOpenSlider] = React.useState(false);

	const handleSlideView = (productId) => {
		if (window.innerWidth > 768) {
			setProductID(productId);
			setOpenSlider(!openSlider);
		} else {
			history.push(`/electronic/product/${productId}`);
		}

		// history.push('/desktop-product/'+productId)
		console.log("Open Slide...");
	};

	// const Transition = React.forwardRef(function Transition(props, ref) {
	// 	return <Slide direction="right" ref={ref} {...props} />;
	// });

	const handleProduct = (
		newproductId,
		newproductImage,
		newproductLink,
		newproductLowestPrice,
		newproductRating,
		newproductTitle,
	) => {
		let productDetails = [];
		productDetails.push({
			product: {
				productId: newproductId,
				productImage: newproductImage,
				productLink: newproductLink,
				productLowestPrice: newproductLowestPrice,
				productRating: newproductRating,
				productTitle: newproductTitle,
			},
		});
		sessionStorage.setItem("productDetails", JSON.stringify(productDetails));
		if (window.innerWidth > 768) {
			handleSlideView(newproductId);
		} else {
			history.push(`/electronic/product/${newproductId}`);
		}
	};
	const classes = useStyles();

	return (
		<React.Fragment>
			<Dialog
				open={openSlider}
				fullScreen
				style={{ justifyContent: "flex-end" }}
				onBackdropClick={handleClose}
				classes={{ paper: classes.dialogPaper }}
			>
				<ProductPage productID={productID} />
			</Dialog>
			<div
				onClick={() =>
					handleProduct(
						productId,
						productImage,
						productLink,
						productLowestPrice,
						productRating,
						productTitle,
					)
				}
				className={`hover:shadow-xl transition duration-500 ease-in-out scale-110  w-full h-full p-2 md:p-8 border-b-2 md:border-b-0  ${
					epic % 2 !== 0 && "border-l-2 md:border-l-0"
				}`}
			>
				{/* <div
					className={`grid grid-cols-2 absolute h-48 ${
						priceCheck ? "visible" : "invisible"
					}`}
				>
					<PriceCheck />
				</div> */}

				<div className="flex justify-center">
					{productImage !== null ? (
						<LazyLoadImage
							effect="blur"
							src={productImage}
							key={productId}
							className="object-contain h-48 w-full"
						/>
					) : (
						<div className="object-contain h-48 w-full flex">
							<div className="m-auto">
								<Text size="base" variant="primary">
									No Image
								</Text>
							</div>
						</div>
					)}
				</div>

				<div>
					<div className="p-1">
						{/* <div
                                    style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <Text size="base" weight="600" variant="primaryDark">
                                        {productTitle}
                                    </Text>
                                </div> */}
						<Link to={`/electronic/product/${productId}`}>
							<div
								style={{
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
								}}
							>
								<Text size="sm" weight="500" variant="primary">
									{productTitle}
								</Text>
							</div>
						</Link>
					</div>
					<div className="flex px-1 space-x-4">
						{productLowestPrice && (
							<div>
								<Text size="sm" weight="600" variant="secondary">
									&#8377; {productLowestPrice}
								</Text>
							</div>
						)}
						{/* {price !== priceStrike && priceStrike !== null ? (
                                    <div>
                                        <Text size="sm" weight="600" variant="primary">
                                            <del>&#8377; {priceStrike}</del>
                                        </Text>
                                    </div>
                                ) : null} */}
					</div>

					<div className="flex justify-between p-1">
						{/* <div>
							<Button
								size="small"
								variant="primary"
								animate={true}
								handleClick={handleCompare}
							>
								Compare
							</Button>
						</div> */}
						{productRating && (
							<div>
								<Text size="xs" variant="primary">
									{Rating(productRating)}
								</Text>
							</div>
						)}

						<div className="hidden md:block">
							<Button
								animate={true}
								size="small"
								variant="primary"
								handleClick={() => handleSlideView(productId)}
							>
								Compare
							</Button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default connect(null, { setCompareProduct })(ProductCard);
