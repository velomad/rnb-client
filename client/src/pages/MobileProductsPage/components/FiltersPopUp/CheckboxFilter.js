import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
let checkedItems = [];

const CheckboxFilter = (props) => {
	// const [checkedItems, setCheckedItems] = React.useState([]);
	const [name, setName] = React.useState([]);

	console.log('Genrated Obj', checkedItems);
	// console.log('props.filterData',props.filterData);

	useEffect(() => {
		if (!!props.filterOption && props.filterOption !== "Gender") {
			let contents = props.filterData.filter(
				(el) => el.title == props.filterOption,
			);
			if (contents[0]) {
				setName(contents[0].contents);
			}
		}
		console.log('name', name);
		console.log('checkedItems', checkedItems);
		name.map((el, index) =>{
			checkedItems.map((item, itemIndex) =>{
				if(item.filterOption === props.filterOption && itemIndex === index){
					name[index]['status'] = true
				}else{
					name[index]['status'] = false
				}
			})
		})
	}, [props.filterOption]);

	const handleChange = (event) => {
		let genObjFilter = {};
		const item = event.target.value;
		const checked = event.target.checked;

		if (!event.target.checked) {
			checkedItems && checkedItems.filter((el, index) => {
				if (el.index === event.target.id && el.isChecked !== event.target.checked) {
					checkedItems.splice(index, 1);
				}
			})
		} else {
			genObjFilter = {
				'index': event.target.id,
				'value': event.target.value,
				'isChecked': event.target.checked,
				'filterOption': props.filterOption
			}
			checkedItems = [...checkedItems, genObjFilter];
		}
		console.log('Checked Obj', checkedItems);
	};
	// console.log("final data", props.filterData);

	return (
		<div
			className="overflow-y-auto"
			style={{ height: document.body.clientHeight - 110 }}
		>
			<ul className="p-4">
				{name &&
					name.map((el, index) => (
						<li key={index}>
							<FormControlLabel
								key={index + el.name}
								control={
									<Checkbox
										key={index + el.name}
										checked={el.status}
										onChange={handleChange}
										name={el.name}
										value={props.filterOption === "Price" ? el.price_start + '-' + el.price_end : el.filter}
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

export default CheckboxFilter;
