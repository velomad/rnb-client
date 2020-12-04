import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxFilter = (props) => {
	const [checkedItems, setCheckedItems] = React.useState(new Map());
	const [name, setName] = React.useState([]);

	console.log(checkedItems);

	useEffect(() => {
		if (!!props.filterOption && props.filterOption !== "Gender") {
			let contents = props.filterData.filter(
				(el) => el.title == props.filterOption,
			);
			if (contents[0]) {
				setName(contents[0].contents);
			}
		}
	}, [props.filterOption]);

	const handleChange = (event) => {
		const item = event.target.value;
		const checked = event.target.checked;
		setCheckedItems((prevState) => {
			return new Map(prevState).set(item, checked);
		});
	};
	console.log("final data", props.filterData);

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
								control={
									<Checkbox
										checked={checkedItems.get(el.name)}
										onChange={handleChange}
										name={el.name}
										value={el.filter}
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
