import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, AppBar, Toolbar, Slide, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import qs from "query-string";
import { Slider, Text } from "../../../../../components";
import { setCompareProduct } from "../../../../../store/actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
		backgroundColor: " #fff",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
		color: "#444",
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

	const storeNames = ["tatacliq", "amazon", "flipkart"];
	let displayStores = [];

	// if (stores) {
	// 	stores.map((el) => {
	// 		storeNames.forEach((element) => {
	// 			if (typeof (el[element] === "Object" && ![] )) {
	// 				displayStores.push(el[element]);
	// 			}
	// 		});
	// 	});
	// }

	var epic = [];
	if (stores) {
		stores.forEach((element) => {
			storeNames.forEach((el) => {
				if (typeof element[el] === "object") {
					epic.push(element[el]);
				}
			});
		});
	}
	console.log(epic);

	const classes = useStyles();
	return (
		<div>
			<Dialog
				fullScreen
				open={props.isCompare}
				TransitionComponent={Transition}
			>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Comparison
						</Typography>
						<div onClick={() => props.setCompareProduct(false, null)}>
							<CloseIcon className="text-gray-600" />
						</div>
					</Toolbar>
				</AppBar>
				<div className="py-4">
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
					<div>
						<Text>{product_brand}</Text>
					</div>
					<div>
						<Text>{product_name}</Text>
					</div>

					<div className="flex justify-between">
						<div>
							<Text>{product_mrp}</Text>
						</div>
						<div>
							<Text>{product_ratings}</Text>
						</div>
					</div>

					<div>
						<div>
							<Text>MOEL</Text>
						</div>
						<div>
							<Text>{product_model}</Text>
						</div>
					</div>

					{available_colors && (
						<div>
							<div>
								<Text>colors</Text>
							</div>
							<div>
								{available_colors.map((el) => (
									<Text>{el}</Text>
								))}
							</div>
						</div>
					)}
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
