import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import "./priceslider.css";

const useStyles = makeStyles({
	root: {
		width: 400,
	},
});

function valuetext(value) {
	return `${value}°C`;
}

export default function PriceSlider(props) {
	const classes = useStyles();
	const start = props.start !== "" ? props.start : 0;
	const end = props.end !== "" ? props.end : 20000;
	const [value, setValue] = React.useState([start, end]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		props.getSliderValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Slider
				min={0}
				max={20000}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
			/>
		</div>
	);
}
