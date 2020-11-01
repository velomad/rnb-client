import React from "react";
import { textVariant, textSize, textWeight } from "../../theme/textTheme";

const Text = ({ size, variant, weight, children, isTitle }) => {
	return (
		<span
			className={`${textVariant[variant]} ${textSize[size]} ${
				textWeight[weight]
			} ${isTitle === true ? `mb-8 title-font tracking-widest` : null}`}
		>
			{children}
		</span>
	);
};

export default Text;
