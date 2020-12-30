import React, { useEffect, useState } from "react";
import { Dialog, Slide } from "@material-ui/core";
import { Stories } from "../../components";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const StoriesPopUp = (props) => {
	const handleCloseStory = () => {
		props.closeStory(false);
	};

	return (
		<div>
			<Dialog
				fullScreen
				open={props.active}
				// onBackdropClick={handleClose}
				// classes={{ paper: classes.dialogPaper }}
				TransitionComponent={Transition}
			>
				<div className="absolute right-0">
					<div className="" onClick={handleCloseStory}>
						closeeeeee
					</div>
					<div>
						<Stories />
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default StoriesPopUp;
