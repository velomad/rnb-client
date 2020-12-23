import React, { Component, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

// const image = [
// 	"//placekitten.com/1500/500",
// 	"//placekitten.com/4000/3000",
// 	"//placekitten.com/800/1200",
// 	"//placekitten.com/1500/1500",
// ];

// const image = "//placekitten.com/1500/1500"

const LightBox = ({ isOpen, onClose, image }) => {
	console.log(image);
	const [photoIndex, setPhotoIndex] = useState(0);
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{isOpen && (
				<Lightbox
					mainSrc={image[photoIndex]}
					// mainSrc={image}
					nextSrc={image[(photoIndex + 1) % image.length]}
					prevSrc={image[(photoIndex + image.length - 1) % image.length]}
					onCloseRequest={() => onClose(false)}
					onMovePrevRequest={() =>
						setPhotoIndex((photoIndex + image.length - 1) % image.length)
					}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex + 1) % image.length)
					}
				/>
			)}
		</div>
	);
};
export default LightBox;
