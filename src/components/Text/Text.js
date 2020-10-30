import React from "react";
import { textVariant, textSize, textWeight } from "../../theme/textTheme";

const Text = ({ size, variant, weight, children }) => {
	return (
		<span
			className={`${textVariant[variant]} ${textSize[size]} ${textWeight[weight]}`}
		>
			{children}
		</span>
	);
};

export default Text;
