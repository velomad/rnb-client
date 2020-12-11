import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { setAppliedFilters } from "../../../../store/actions";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxFilter = (props) => {
	const [renderUI, setRenderUI] = useState(false);

	const handleChange = (e, newData) => {

		let dummyArr = [];
		newData.index = e.target.id;
		dummyArr.push(newData);

		props.filters[props.filterOption].map((el, outindex) => {
			dummyArr.map((innerEl) => {
				if (
					Number(outindex) === Number(innerEl.index) &&
					el.name === innerEl.name &&
					innerEl.isChecked === false
				) {
					el.isChecked = true;
					setRenderUI(!renderUI);
				} else {
					if (
						innerEl.isChecked === true &&
						Number(outindex) === Number(innerEl.index)
					) {
						el.isChecked = false;
						setRenderUI(!renderUI);
					}
					if (el.isChecked) {
					} else {
						el.isChecked = false;
						setRenderUI(!renderUI);
					}
				}
			});
		});
		props.setAppliedFilters(props.filters[props.filterOption].filter(el=> {
			return el.isChecked === true 
		}));

	};

	return (
		<div
			className="overflow-y-auto"
			style={{ height: document.body.clientHeight - 110 }}
		>
			<ul className="p-4">
				{renderUI
					? props.filters &&
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
					: props.filters &&
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
					  ))}
			</ul>
		</div>
	);
};

export default connect(null, { setAppliedFilters })(CheckboxFilter);
