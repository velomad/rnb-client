import React, { useEffect, useState } from "react";
import { Dialog, Slide } from "@material-ui/core";
import { Stories } from "../../components";
import { setStoriesPopUp } from "../../../../store/actions";
import { connect } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const StoriesPopUp = (props) => {
	return (
		<div>
			<Dialog
				fullScreen
				open={props.isActive}
				// onBackdropClick={handleClose}
				// classes={{ paper: classes.dialogPaper }}
				TransitionComponent={Transition}
			>
				<div className="absolute right-0">
					<div>
						<Stories />
					</div>
				</div>
			</Dialog>
		</div>
	);
};

const mapStateToProps = ({ uiState }) => ({
	isActive: uiState.isStoriesPopUp,
});

export default connect(mapStateToProps, { setStoriesPopUp })(StoriesPopUp);
