import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Dialog,
	AppBar,
	Toolbar,
	Slide,
	Container,
	Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import qs from "query-string";
import Axios from "axios";
import { Slider } from "../../../../../components";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
		backgroundColor: " #1a202c",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
		color: "#dddcd7",
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ComparisonPopUp = (props) => {
	// const [productData, setProductData] = useState({});
	console.log(props.newproductData);
	console.log(props.newproductData.product_images);
	// useEffect(() => {
	// 	console.log("kashda");
	// 	getProductInfo(props.id);
	// }, [props]);

	const getProductInfo = async (id) => {
		const response = await Axios.get(
			`https://price-api.datayuge.com/api/v1/compare/detail?api_key=nt5N7VXa0hYPHiIwRTJKZpwFiMjzvcicnoS&id=${id}`,
		);
		// console.log(response.data.data);
		// setProductData(response.data.data);
	};

	const handleComparisonClose = () => {
		props.getComparisonState(false);
	};

	const classes = useStyles();
	console.log(props);
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
						<div onClick={handleComparisonClose}>
							<CloseIcon />
						</div>
					</Toolbar>
				</AppBar>
				<div>
					<Slider
							productImages={props.newproductData.product_images}
							spaceBetween={20}
							slidesPerView={3}
							pagination={true}
							loop={false}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							slidesPerViewMobile={1}
							spaceBetweenMobile={10}
							cardHeight={"15rem"}
						/>
				</div>
			</Dialog>
		</div>
	);
};

export default ComparisonPopUp;
