import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxFilter = (props) => {
	const [checked, setChecked] = React.useState(true);
	const [name, setName] = React.useState([]);
	console.log(props.filterData);
	// console.log(props.filterOption)
	useEffect(() => {
		if (!!props.filterOption && props.filterOption !== "Gender") {
			let contents = props.filterData.filter(
				(el) => el.title == props.filterOption,
			);
			setName(contents[0].contents);
		}
	}, [props.filterOption]);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	console.log("final dara", props.filterData);

	return (
		<div className="overflow-y-auto" style={{ height: "75vh" }}>
			<ul className="p-4">
				{name &&
					name.map((el, index) => (
						<li key={index}>
							<FormControlLabel
								control={
									<Checkbox
										checked={checked}
										onChange={handleChange}
										name="checkedA"
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
