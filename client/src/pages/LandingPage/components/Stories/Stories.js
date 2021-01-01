import React, { useEffect } from "react";
import { Text, Button } from "../../../../components";
import { connect } from "react-redux";
import { setStoriesPopUp, getStories } from "../../../../store/actions";
import Story, { WithHeader } from "react-insta-stories";

const Stories = (props) => {
	var stories = [];

	props.storiesArry.map((el) => {
		stories.push({
			content: () => (
				<React.Fragment>
					<div className="py-4">
						{/* <div
							className="absolute right-2 p-2 bg-white rounded-lg z-70"
							onClick={() => props.setStoriesPopUp(false, null)}
						> */}
						{/* <Text size="small" isTitle={true} variant="primaryDark">
								Close
							</Text>*/}
						{/* <Button handleClick={handleClose}>close</Button> */}
						{/* </div> */}
					</div>
					<img src={el.image} className=" object-contain" />
				</React.Fragment>
			),
		});
	});

	return (
		<Story
			stories={stories}
			defaultInterval={2500}
			currentIndex={props.storyIndex}
			width="100vw"
			height="100vh"
			onAllStoriesEnd={() => props.setStoriesPopUp(false, null)}
		/>
	);
};

const mapStateToProps = ({ uiState, landingPageState }) => ({
	storyIndex: uiState.story,
	storiesArry: landingPageState.stories,
});

export default connect(mapStateToProps, { setStoriesPopUp, getStories })(
	Stories,
);
