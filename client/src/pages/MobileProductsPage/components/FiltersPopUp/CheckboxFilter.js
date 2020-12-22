import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { setAppliedFilters } from "../../../../store/actions";
import { Text } from "../../../../components";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxFilter = (props) => {
	const [renderUI, setRenderUI] = useState(false);
	const [brandFilter, setBrandFilter] = useState("");

	const handleChange = (e, newData) => {
		let dummyArr = [];
		newData.index = e.target.id;
		dummyArr.push(newData);

		filteredData.map((el, outindex) => {
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

		// 	// props.setAppliedFilters(
		// 	// 	props.filters[props.filterOption].filter((el) => {
		// 	// 		return el.isChecked === true;
		// 	// 	}),
		// 	// );
		// 	var testArry = [];
		// 	props.filters[props.filterOption].map((el) => {
		// 		if (el.isChecked === true) {
		// 			for (let i = 0; i < testArry.length; i++) {
		// 				if (
		// 					!!testArry[i]
		// 						? testArry[i].name
		// 						: "" !== el.name && !!testArry[i]
		// 						? testArry[i].index
		// 						: "" !== el.index
		// 				) {
		// 					testArry.push(el);
		// 				}
		// 			}
		// 			let Parse = !!eval(sessionStorage.getItem("test"))
		// 				? eval(sessionStorage.getItem("test"))
		// 				: [];
		// 			Parse.map((newEl, index) => {
		// 				if (testArry.length !== 0) {
		// 					for (let i = 0; i < testArry.length; i++) {
		// 						if (
		// 							testArry[i].name !== newEl.name &&
		// 							testArry[i].index !== newEl.index
		// 						) {
		// 							testArry.push(newEl);
		// 						}
		// 					}
		// 				}
		// 			});
		// 		}
		// 	});
		// 	sessionStorage.setItem("test", JSON.stringify(testArry));
	};

	var filteredData = props.filters[props.filterOption].filter((item) => {
		return item.name.toLowerCase().includes(brandFilter.toLowerCase());
	});

	const handleBrandFilter = (e) => {
		setBrandFilter(e.target.value);
	};

	return (
		<div
			className="overflow-y-auto"
			style={{ height: document.body.clientHeight - 110 }}
		>
			{props.filterOption === "Brand" && (
				<div class="relative w-full text-gray-600 p-2 mt-2">
					<input
						// type="search"
						name="serch"
						placeholder="Search"
						autoComplete="off"
						onChange={handleBrandFilter}
						value={brandFilter}
						class="border-t-2 shadow-xl w-full p-2 rounded-full text-sm focus:outline-none"
						style={{
							caretColor: "#ff285e",
						}}
					/>
					<button type="submit" class="absolute right-0 top-0 mt-4 mr-5">
						<svg
							class="h-5 w-5 fill-current"
							version="1.1"
							id="Capa_1"
							x="0px"
							y="0px"
							viewBox="0 0 56.966 56.966"
							// width="512px"
							// height="512px"
						>
							<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
						</svg>
					</button>
				</div>
			)}

			<ul className="p-4">
				{renderUI
					? props.filters &&
					  filteredData.map((el, index) => (
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
									label={
										<Text size="sm" variant="primary" weight="700">
											{el.name}
										</Text>
									}
								/>
							</li>
					  ))
					: props.filters &&
					  filteredData.map((el, index) => (
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
									label={
										<Text size="sm" variant="primary" weight="700">
											{el.name}
										</Text>
									}
								/>
							</li>
					  ))}
			</ul>
		</div>
	);
};

export default connect(null, { setAppliedFilters })(CheckboxFilter);
