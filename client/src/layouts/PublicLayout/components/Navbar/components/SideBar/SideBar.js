import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from "@material-ui/core/Drawer";
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
import Icon from "@material-ui/core/Icon";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { history } from "../../../../../../utils";
import { Text } from "../../../../../../components";
import { connect } from "react-redux";
import { setSidebar } from "../../../../../../store/actions";
const useStyles = makeStyles((theme) => ({
	list: {
		width: 270,
		backgroundColor: "#222",
		[theme.breakpoints.up("md")]: {
			width: 350,
		},
	},
	fullList: {
		width: "auto",
	},
	drawer: {
		opacity: 0.9,
	},
}));
const Sidebar = (props) => {
	console.log(props.open);

	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const [openListItem, setopenListItem] = React.useState("");

	const getProducts = (product) => {
		props.setSidebar(false);
		history.push("/electronic/products?sub_category=" + product);
	};

	const handleClick = (val) => {
		if (openListItem !== val) {
			setopenListItem(val);
		} else {
			setopenListItem("close");
		}
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
								<ListItem key={index} button onClick={() => handleClick(item)}>
									{/* <ListItemIcon>
										<SvgIcon component={InboxIcon} viewBox="0 0 600 476.6" />
									</ListItemIcon> */}
									<ListItemText
										primary={
											<Text variant="white" weight="500">
												{item}
											</Text>
										}
									/>
									{openListItem === item ? (
										<ExpandLess className="text-pink-100" />
									) : (
										<ExpandMore className="text-gray-600" />
									)}
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
															<DoubleArrowIcon className="text-gray-600" />
														</ListItemIcon>
														<ListItemText
															onClick={() =>
																getProducts(listItem.child_category)
															}
															primary={
																<Text variant="white" weight="500">
																	{listItem.child_category_name}
																</Text>
															}
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
			<React.Fragment>
				<Drawer
					className={classes.drawer}
					ModalProps={{ onBackdropClick: () => props.setSidebar(false) }}
					anchor="right"
					// onBackdropClick={props.setSidebar(false)}
					// className={classes.drawer}
					open={props.open}
					// classes={{
					// 	paper: classes.drawerPaper,
					// }}
				>
					{list("right")}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

const mapStateToProps = ({ uiState }) => ({
	open: uiState.isSidebar,
});

export default connect(mapStateToProps, { setSidebar })(Sidebar);
