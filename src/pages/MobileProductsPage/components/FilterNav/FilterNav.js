import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TuneIcon from '@material-ui/icons/Tune';
import {connect} from 'react-redux';
import { setFilterPopUpAction, setSortPopUpAction } from "../../../../store/actions";

const useStyles = makeStyles({
	root: {
		width: "50%",
		backgroundColor: "#fff",
		zIndex: 100,
	},
	stickToBottom: {
		width: "100%",
		position: "fixed",
		bottom: 0,
	},
	iconStyle: {
		color: "#222",
	},
});

const BottomNav = (props) => {

    const handleFiltersPopUp = () => {
        props.setFilterPopUpAction(true)
    }

    const handleSortPopUp = () => {
        props.setSortPopUpAction(true)
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

const mapDispatchToProps = {setFilterPopUpAction, setSortPopUpAction} 

export default connect(null, mapDispatchToProps)(BottomNav);
