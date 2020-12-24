import React, { useEffect } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Rating, Text } from "../../../../../components";
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
import { connect } from "react-redux";
import {
	setProductSpecsPopUp,
	getProductSpecs,
} from "../../../../../store/actions";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "static",
		height: 50,
		backgroundColor: " #1a202c",
		display: "flex",
		justifyContent: "center",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
		color: "#dddcd7",
		fontSize: 16,
	},
	dialogPaper: {
		maxHeight: "70vh",
		marginTop: "30vh",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	desktopDialogPaper: {
		maxHeight: "70vh",
		marginTop: "30vh",
		width: "36%",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ProductSpecs = (props) => {
	useEffect(() => {
		props.getProductSpecs(props.productId);
	}, []);

	const classes = useStyles();

	return (
		<React.Fragment>
			<Dialog
				fullScreen
				onBackdropClick={() => props.setProductSpecsPopUp(false)}
				open={props.isOpen}
				TransitionComponent={Transition}
				classes={{
					paper:
						window.innerWidth > 769
							? classes.desktopDialogPaper
							: classes.dialogPaper,
				}}
			>
				<AppBar className={classes.appBar}>
					<Toolbar className="flex justify-between">
						<div>
							<Text variant="white" isTitle={true} classes="uppercase">
								specifications
							</Text>
						</div>

						<IconButton
							edge="start"
							color="inherit"
							onClick={() => props.setProductSpecsPopUp(false)}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				{props.specsLoading === true ? (
					"Loading.."
				) : (
					<div>
						<ul className="shadow-lg m-4 rounded-md ">
							{props.specs &&
							props.specs.main_specs &&
							props.specs.main_specs.length > 0
								? props.specs.main_specs.map((el, index) => {
										return (
											<li className="p-2 py-1" key={index}>
												<Text variant="primary ">
													<ArrowRightIcon /> {el}
												</Text>
											</li>
										);
								  })
								: null}
						</ul>
						{props.specs && props.specs.sub_specs ? (
							Object.keys(props.specs.sub_specs).map((el, index) => {
								return (
									<React.Fragment>
										<div className="py-2">
											<Divider />
										</div>
										<Text
											key={index}
											variant="primaryDark"
											weight="600"
											classes="ml-4"
										>
											{el}
										</Text>
										<Grid container spacing={0}>
											{props.specs.sub_specs[el].map((item, itemindex) => {
												return (
													<React.Fragment>
														<Grid item xs={6} className="space-y-4">
															<div className="ml-4 mr-4 mt-2 mb-2">
																<Text variant="primary" key={itemindex}>
																	{item.spec_key}
																</Text>
															</div>
														</Grid>
														<Grid item xs={6}>
															<div className="ml-4 mr-4 mt-2 mb-2">
																<Text variant="primary" key={itemindex}>
																	{item.spec_value}
																</Text>
															</div>
														</Grid>
													</React.Fragment>
												);
											})}
										</Grid>
									</React.Fragment>
								);
							})
						) : (
							<div className="mx-auto">
								<div className="flex items-center justify-center">
									Not Available
								</div>
							</div>
						)}
					</div>
				)}
			</Dialog>
		</React.Fragment>
	);
};

const mapStateToProps = ({ uiState, dataYugeProductsState }) => ({
	isOpen: uiState.isProductSpecsPopUp,
	specs: dataYugeProductsState.productSpecs,
	specsLoading: dataYugeProductsState.productSpecsLoading,
});

export default connect(mapStateToProps, {
	setProductSpecsPopUp,
	getProductSpecs,
})(ProductSpecs);
