import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
	root: {
        width: 300,
	},
});

function valuetext(value) {
	return `${value}°C`;
}

export default function PriceSlider() {
    const classes = useStyles();
    const start = 0
    const end = 100
	const [value, setValue] = React.useState([start, end]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Slider
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
			/>
		</div>
	);
}
