import React from "react";
import { ButtonSize, ButtonType } from "../../theme/buttonTheme";

const Button = ({ size, variant, children, animate }) => {
	return (
		<button
			className={`${ButtonType[variant]} ${ButtonSize[size]}  ${
				animate && `animate duration-500 ease-in-out rounded-lg`
			}  `}
		>
			{children}
		</button>
	);
};

export default Button;

