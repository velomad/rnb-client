import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, Grid } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles({
	root: {
		width: "50%",
		backgroundColor: "#1a202c",
		zIndex: 100,
	},
	stickToBottom: {
		width: "100%",
		position: "fixed",
		bottom: 0,
	},
	iconStyle: {
		color: "#dddcd7",
	},
});

const BottomNav = () => {

    const handleFiltersPopUp = () => {
        console.log("filters")
    }

    const handleSortPopUp = () => {
        console.log("sort")
    }

	const classes = useStyles();
	return (
		<BottomNavigation
			showLabels
			className={clsx(classes.root, classes.stickToBottom)}
		>
			<BottomNavigationAction
                onClick={handleSortPopUp}
				icon={<ImportExportIcon className={classes.iconStyle} />}
			/>
			
			<BottomNavigationAction
                onClick={handleFiltersPopUp}
				icon={<TuneIcon className={classes.iconStyle} />}
			/>
		</BottomNavigation>
	);
};

export default BottomNav;
