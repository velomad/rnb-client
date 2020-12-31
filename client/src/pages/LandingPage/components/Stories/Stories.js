import React from "react";
import { Text, Button } from "../../../../components";
import { connect } from "react-redux";
import { setStoriesPopUp } from "../../../../store/actions";
import Story, { WithHeader } from "react-insta-stories";

const Stories = (props) => {

	const storiesArry = [
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/aa.png",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ab.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ac.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ad.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/ae.jpg",
		},
		{
			image: "http://reachnbuy.unitechitsolution.in/AndroidClass/images/af.jpg",
		},
		{
			image:
				"http://reachnbuy.unitechitsolution.in/AndroidClass/images/c11ad7bd236925f6c1b71d9cc9dc3087.gif",
		},
	];

	var stories = [];

	storiesArry.map((el) => {
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

const mapStateToProps = ({ uiState }) => ({
	storyIndex: uiState.story,
});

export default connect(mapStateToProps, { setStoriesPopUp })(Stories);
