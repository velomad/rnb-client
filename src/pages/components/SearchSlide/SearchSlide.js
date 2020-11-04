import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Slide } from "@material-ui/core";
import { connect } from "react-redux";
import { setSearchSlide, setSearchTerm } from "../../../store/actions";
import { Text } from "../../../components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { SearchChip } from "./components";

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
	caretStyles: {
		caretColor: "#ff285e",
		fontSize: 18,
		color: "#777",
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

const SearchSlide = (props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleClose = () => {
		props.setSearchSlide(false);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		props.setSearchTerm(searchTerm);
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const classes = useStyles();
	return (
		<div>
			<Dialog fullScreen open={props.isActive} TransitionComponent={Transition}>
				<div className="flex p-2 items-center">
					<div onClick={handleClose}>
						<ArrowBackIcon fontSize="medium" className="text-gray-600" />
					</div>
					<div className="w-full px-2">
						<form onSubmit={handleSearchSubmit}>
							<input
								type="text"
								className={`h-8 w-full outline-none ${classes.caretStyles}`}
								placeholder="Search for products"
								onChange={handleChange}
								value={searchTerm}
							/>
						</form>
					</div>
					<div>
						<SearchOutlinedIcon fontSize="medium" className="text-red-600" />
					</div>
				</div>
				<hr className="bg-gray-300 shadow-xl" />
				<div className="bg-gray-200 h-full">
					<div className="px-2 py-4 my-4  bg-gray-900">
						<div className="mb-4">
							<Text variant="contrast" weight="600" size="sm" isTitle={true}>
								RECENT SEARCHES
							</Text>
						</div>
						<div>
							<SearchChip />
						</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

const mapStateToProps = ({ uiState }) => ({
	isActive: uiState.isSearchSlide,
});

export default connect(mapStateToProps, { setSearchSlide, setSearchTerm })(
	SearchSlide,
);
