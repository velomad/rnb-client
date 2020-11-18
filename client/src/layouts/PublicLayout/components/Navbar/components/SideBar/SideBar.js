import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import { electronics } from "../Menu/DynamicContent/electronicsMenuData";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
const useStyles = makeStyles((theme) => ({
	list: {
		width: 'auto',
		[theme.breakpoints.up('md')]: {
			width: 350,
		}
	},
	fullList: {
		width: "auto",
	},
}));
export default function SwipeableTemporaryDrawer(props) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const [openListItem, setopenListItem] = React.useState("");
	const getProducts = (product) => {
		axios
			.get(
				`https://price-api.datayuge.com/api/v1/compare/list?api_key=nt5N7VXa0hYPHiIwRTJKZpwFiMjzvcicnoS&sub_category=${product}&can_compare=1&page=1`,
			)
			.then((response) => {
				console.log("Data yuge res...", response.data);
			})
			.catch((err) => {
				console.log("Error fetching datayuge", err);
			});
	};
	const handleClick = (val) => {
		if (openListItem !== val) {
			setopenListItem(val);
		} else {
			setopenListItem("close");
		}
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	const handleClickAway = () => {
		console.log('click away...');
		setState({ ...state, 'right': true });
	};

	const list = (anchor) => (

		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
		>
			<List>
				{Object.keys(electronics)
					.reverse()
					.map((item, index) => {
						return (
							<React.Fragment>
								<ListItem
									key={index}
									button
									onClick={() => handleClick(item)}
								>
									{/* <ListItemIcon>
										<SvgIcon component={InboxIcon} viewBox="0 0 600 476.6" />
									</ListItemIcon> */}
									<ListItemText primary={item} />
									{openListItem === item ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse
									in={openListItem === item}
									timeout="auto"
									unmountOnExit
								>
									{electronics[item].map((listItem, index) => {
										return (
											<List key={index} component="div" disablePadding>
												{!!listItem.child_category_name ? (
													<ListItem button className={classes.nested}>
														<ListItemIcon>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															onClick={() =>
																getProducts(listItem.child_category)
															}
															primary={listItem.child_category_name}
														/>
													</ListItem>
												) : null}
											</List>
										);
									})}
								</Collapse>
							</React.Fragment>
						);
					})}
			</List>
		</div>
	);

	return (
		<div>
			{
				<React.Fragment>
						<SwipeableDrawer
							anchor="right"
							open={props.toggleSideBar}
							onClose={toggleDrawer("right", false)}
							onOpen={toggleDrawer("right", true)}
						>
							{list("right")}
						</SwipeableDrawer>
				</React.Fragment>
			}
		</div>
	);
}
