import React from "react";
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
import { setFilterPopUpAction } from "../../../../store/actions";
import { Text } from "../../../../components";
import PriceSlider from "./PriceSlider";

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

const FiltersPopUp = (props) => {
	const handleClose = () => {
		props.setFilterPopUpAction(false);
	};

	const classes = useStyles();
	return (
		<div>
			<Dialog fullScreen open={props.isActive} TransitionComponent={Transition}>
				{/* <AppBar className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Filter
						</Typography>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar> */}
				<div className="flex justify-between p-3">
					<div>
						<Text 
						variant="secondary"
						weight="500"
						size="lg"
						>
							Filters
						</Text>
					</div>
					<div onClick={handleClose}>
						<CloseIcon />
					</div>
				</div>
				<hr style={{color:"solid black 1px"}}/>

				<div className="p-4 h-full g-gray-100">
					<div>
						<Text variant="secondary" size="xl" weight="600">
							Price
						</Text>
					</div>
					<div>
						<Text variant="primary" size="lg" weight="500">
							Select the price range
						</Text>
					</div>
					<div className="py-10 px-8 flex justify-center">
						<PriceSlider />
					</div>
				</div>
				<div className="p-4 h-full g-gray-100">
					<div>
						<Text variant="secondary" size="xl" weight="600">
							Discount
						</Text>
					</div>
					<div>
						<Text variant="primary" size="lg" weight="500">
							Select discount
						</Text>
					</div>
					<div className="py-8 space-y-2">
						<div className=" flex space-x-2">
							<div>
								<input type="radio" id="male" name="gender" value="male" />
							</div>
							<div>
								<Text variant="primary" size="lg">
									10% and Above
								</Text>
							</div>
						</div>
						<div className=" flex space-x-2">
							<div>
								<input type="radio" id="male" name="gender" value="male" />
							</div>
							<div>
								<Text variant="primary" size="lg">
									10% and Above
								</Text>
							</div>
						</div>
						<div className=" flex space-x-2">
							<div>
								<input type="radio" id="male" name="gender" value="male" />
							</div>
							<div>
								<Text variant="primary" size="lg">
									10% and Above
								</Text>
							</div>
						</div>
						<div className=" flex space-x-2">
							<div>
								<input type="radio" id="male" name="gender" value="male" />
							</div>
							<div>
								<Text variant="primary" size="lg">
									10% and Above
								</Text>
							</div>
						</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

const mapStateToProps = ({ uiState }) => ({
	isActive: uiState.isFilter,
});

const mapDispatchToProps = { setFilterPopUpAction };

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPopUp);
