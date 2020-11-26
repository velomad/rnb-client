import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, AppBar, Toolbar, Slide, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import qs from "query-string";
import { Slider, Text, Rating, Button } from "../../../../../components";
import { setCompareProduct } from "../../../../../store/actions";
import { connect } from "react-redux";
import WebsiteThumbSlider from "./WebsiteThumbSlider";
import LowPriceDetector from "./LowPriceDetector";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "fixed",
		backgroundColor: " #1a202c",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
		color: "#fff",
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ComparisonPopUp = (props) => {
	const {
		product_images,
		product_brand,
		product_model,
		product_name,
		product_mrp,
		product_ratings,
		available_colors,
		stores,
	} = props.productDetail;

	var storesToDisplay = [];
	if (stores) {
		stores.map((el, index) => {
			Object.keys(el).map((item, itemindex) => {
				if (el[item].length !== 0) {
					storesToDisplay.push(el);
				}
			});
		});
	}

	let LowCoststoreLink;
	if (storesToDisplay[0]) {
		LowCoststoreLink =
			storesToDisplay[0][Object.keys(storesToDisplay[0])].product_store_url;
	}

	const classes = useStyles();
	return (
		<div>
			<Dialog
				fullScreen
				open={props.isCompare}
				TransitionComponent={Transition}
			>
				<AppBar className={classes.appBar}>
					<Toolbar className="flex justify-between">
						{/* <Typography variant="h6" className={classes.title}>
							Comparison
						</Typography> */}
						<div>
							<img
								src="https://raw.githubusercontent.com/velomad/ReachNBuy/main/src/assets/img/logo.png"
								width="50px"
							/>
						</div>
						<div onClick={() => props.setCompareProduct(false, null)}>
							<CloseIcon className="text-gray-600" />
						</div>
					</Toolbar>
				</AppBar>
				<div className="py-4 pt-16">
					<div>
						<Slider
							productImages={product_images}
							spaceBetween={20}
							slidesPerView={3}
							pagination={true}
							loop={false}
							autoplay={{
								delay: 2500,
								disableOnInteraction: true,
							}}
							slidesPerViewMobile={1}
							spaceBetweenMobile={10}
							cardHeight={"h-40"}
						/>
					</div>

					<div className="space-y-2 p-2 shadow-lg m-4 rounded-md">
						<div>
							<Text size="xl" weight="600" variant="primaryDark">
								{product_brand}
							</Text>
						</div>
						<div>
							<Text size="sm" variant="primary">
								{product_name}
							</Text>
						</div>

						<div className="flex space-x-6">
							{product_mrp !== "" && (
								<div>
									<Text variant="primaryDark" weight="600" size="lg">
										&#8377; {product_mrp}
									</Text>
								</div>
							)}

							<div>{Rating(product_ratings)}</div>
						</div>
						{/* <div>
							<div>
								<Text
									classes="uppercase"
									variant="danger"
									size="md"
									weight="600"
								>
									model
								</Text>
							</div>
							<div>
								<Text variant="primary" size="sm">
									{product_model}
								</Text>
							</div>
						</div> */}

						{available_colors && (
							<div className="flex space-x-6 items-center">
								<div>
									<Text
										variant="danger"
										size="md"
										weight="600"
										classes="uppercase"
									>
										colours
									</Text>
								</div>
								<div className="flex flex-wrap">
									{available_colors.map((el) => (
										<Text variant="primary" size="sm">
											{el},
										</Text>
									))}
								</div>
							</div>
						)}

						{/* <div>
						{epic.map(el => (
							<div>
								{JSON.stringify(el)}
							</div>
						))}
					</div> */}
					</div>

					<div className="py-4 p-2 shadow-xl m-4 rounded-md">
						{storesToDisplay.map((el, index) =>
							Object.keys(el).map((elem) => (
								<LowPriceDetector
									price={el[elem].product_price}
									image={el[elem].product_store_logo}
									index={index}
								/>
							)),
						)}
						<div className="text-center py-2">
							<Button
								variant="primary"
								size="base"
								animate={true}
								handleClick={() => window.open(LowCoststoreLink, "_blank")}
							>
								buy now at lowest price
							</Button>
						</div>
					</div>

					<div className="py-4">
						<WebsiteThumbSlider stores={storesToDisplay} />
					</div>
				</div>
			</Dialog>
		</div>
	);
};

const mapStateToProps = ({ uiState }) => ({
	isCompare: uiState.isCompare,
	productDetail: uiState.comparisonProductDetail,
});

export default connect(mapStateToProps, { setCompareProduct })(ComparisonPopUp);
