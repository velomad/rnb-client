import React from "react";
import { textVariant, textSize, textWeight } from "../../theme/textTheme";

const Text = ({ size, variant, weight, children }) => {
	return (
		<text className={`${textVariant[variant]} ${textSize[size]} ${textWeight[weight]}`}>
			{children}
		</text>
	);
};

export default Text;
