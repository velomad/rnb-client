import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

var data = [];

const CheckboxFilter = (props) => {
	const [renderUI, setRenderUI] = useState(false);
	const [pushFlag, setPushFlag] = useState("1");

	var epic = props.filterNames;
	epic.map(function (el) {
		if (pushFlag === "1") {
			data.push({ [el]: [] });
			setPushFlag("2");
		}
	});

	console.log("props.filters", props.filters);
	console.log(data);
	// console.log(props.activeOption);
	// console.log(props.filterOption);

	const handleChange = (e, newData) => {
		let dummyArr = [];
		newData.index = e.target.id;
		dummyArr.push(newData);
		console.log("newData", newData);

		props.filters[props.filterOption].map((el, outindex) => {
			dummyArr.map((innerEl, innerIndex) => {
				if (
					Number(outindex) === Number(innerEl.index) &&
					el.name === innerEl.name && innerEl.isChecked === false
				) {
					el.isChecked = true;
					setRenderUI(!renderUI);
				}else{
					if(innerEl.isChecked === true && Number(outindex) === Number(innerEl.index)){
						el.isChecked = false;
						setRenderUI(!renderUI);
					}
					if(el.isChecked){

					}else{
						el.isChecked = false;
						setRenderUI(!renderUI);
					}
				}
			});
		});

		console.log("afterrrrrr", props.filters[props.filterOption]);

		// const value = e.target.value;
		// const isChecked = e.target.checked;
		// if (!e.target.checked) {
		// 	data[props.activeOption][props.filterOption].filter((el, index) => {
		// 		if (el.index === e.target.id && el.isChecked !== e.target.checked) {
		// 			data[props.activeOption][props.filterOption].splice(index, 1);
		// 		}
		// 	});
		// } else {
		// 	data[props.activeOption][props.filterOption].push({
		// 		value,
		// 		isChecked,
		// 		index,
		// 	});
		// }
		// console.log(data);
	};

	const checker = (e) => {
		return data[props.activeOption][props.filterOption].some(
			(el) => el.index == e,
		);
	};

	return (
		<div
			className="overflow-y-auto"
			style={{ height: document.body.clientHeight - 110 }}
		>
			<ul className="p-4">
				{
					renderUI?props.filters &&
					props.filters[props.filterOption].map((el, index) => (
						<li key={index}>
							<FormControlLabel
								key={el + index}
								control={
									<Checkbox
										checked={el.isChecked}
										onChange={(e) => handleChange(e, el)}
										name={el.name}
										value={
											props.filterOption === "Price"
												? el.price_start + "-" + el.price_end
												: el.filter
										}
										id={index}
									/>
								}
								label={el.name}
							/>
						</li>
					))
					:
					props.filters &&
					props.filters[props.filterOption].map((el, index) => (
						<li key={index}>
							<FormControlLabel
								key={el + index}
								control={
									<Checkbox
										checked={el.isChecked}
										onChange={(e) => handleChange(e, el)}
										name={el.name}
										value={
											props.filterOption === "Price"
												? el.price_start + "-" + el.price_end
												: el.filter
										}
										id={index}
									/>
								}
								label={el.name}
							/>
						</li>
					))

				}
				
			</ul>
		</div>
	);
};

export default CheckboxFilter;
