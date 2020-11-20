import React from "react";
import { ButtonSize, ButtonType } from "../../theme/buttonTheme";

const Button = ({ size, variant, children, animate, classes, handleClick }) => {
	return (
		<button
			onClick={handleClick}
			className={`${ButtonType[variant]} ${ButtonSize[size]}  ${
				animate && `animate duration-500 ease-in-out rounded-lg`
			} ${classes} `}
		>
			{children}
		</button>
	);
};

export default Button;
