import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import TuneIcon from "@material-ui/icons/Tune";
import { connect } from "react-redux";
import {
	setFilterPopUpAction,
	setSortPopUpAction,
} from "../../../../store/actions";
import { Text } from "../../../../components";
const useStyles = makeStyles({
	root: {
		width: "50%",
		// backgroundColor: "#666",
		background: "rgba(230,230,230,230)",
		zIndex: 100,
	},
	stickToBottom: {
		width: "100%",
		position: "fixed",
		bottom: 0,
	},
	iconStyle: {
		color: "#000",
	},
});

const BottomNav = (props) => {
	const handleFiltersPopUp = () => {
		props.setFilterPopUpAction(true);
	};

	const handleSortPopUp = () => {
		props.setSortPopUpAction(true);
	};

	const Filter = () => {
		return (
			<div className="flex items-center space-x-1">
				<TuneIcon className={classes.iconStyle} />
				<div>
					<Text size="base" variant="black">
						Filter
					</Text>
				</div>
			</div>
		);
	};

	const Sort = () => {
		return (
			<div className="flex items-center space-x-1">
				<ImportExportIcon className={classes.iconStyle} />
				<div>
					<Text size="base" variant="black">
						Sort
					</Text>
				</div>
			</div>
		);
	};

	const classes = useStyles();
	return (
		<BottomNavigation
			showLabels
			className={clsx(classes.root, classes.stickToBottom)}
		>
			<BottomNavigationAction onClick={handleSortPopUp} icon={<Sort />} />

			<BottomNavigationAction onClick={handleFiltersPopUp} icon={<Filter />} />
		</BottomNavigation>
	);
};

const mapDispatchToProps = { setFilterPopUpAction, setSortPopUpAction };

export default connect(null, mapDispatchToProps)(BottomNav);
