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
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@material-ui/icons/TrendingDownOutlined';
import { connect } from "react-redux";
import { setSortPopUpAction } from "../../../../store/actions";
import { Text } from "../../../../components";

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

const SortingPopUp = (props) => {
	const handleClose = () => {
		props.setSortPopUpAction(false);
	};

	const classes = useStyles();

	return (
		<div>
			<Dialog
				fullScreen
				open={props.isActive}
				// onClose={handleClose}
				TransitionComponent={Transition}
				style={{ height: "45vh", marginTop: "55vh" }}
			>
				{/* <AppBar className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							SORT BY
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
							Sort By
						</Text>
					</div>
					<div onClick={handleClose}>
						<CloseIcon />
					</div>
				</div>
				<hr style={{color:"solid black 1px"}}/>
				<div className="p-2 h-full flex content-center flex-wrap ">
					<ul className="py-2">
						<li className="py-3">
							<LocalOfferOutlinedIcon className="text-yellow-600 rounded-full mr-2"/> 
							<Text 
							variant="primary"
							size="lg"
							weight="500"
							>
								Discount
							</Text>
						</li>
						<li className="py-3">
							<TrendingDownOutlinedIcon className="text-red-500 rounded-full mr-2"/>
							<Text 
							variant="primary"
							size="lg"
							weight="500"
							>
								Price : High To Low
							</Text>
							 
						</li>
						<li className="py-3">
							<TrendingUpOutlinedIcon className="text-green-500 rounded-full mr-2"/>
							<Text 
							variant="primary"
							size="lg"
							weight="500"
							>
								Price : Low To High
							</Text>
						</li>
					</ul>
				</div>
			</Dialog>
		</div>
	);
};

const mapStateToProps = ({ uiState }) => ({
	isActive: uiState.isSort,
});

const mapDispatchToProps = { setSortPopUpAction };

export default connect(mapStateToProps, mapDispatchToProps)(SortingPopUp);
