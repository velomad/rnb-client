/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
	createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { FormControl, MenuItem, InputLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { history } from "../../utils";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		marginRight: theme.spacing(0),
		minWidth: 150,
		background: "#fff",
		borderRadius: "4px",
		borderTopRightRadius: "0px",
		borderBottomRightRadius: "0px",
	},
	searchControl: {
		background: "#fff",
		borderRadius: "4px",
		borderTopLeftRadius: "0px",
		borderBottomLeftRadius: "0px",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const filterOptions = createFilterOptions({
	matchFrom: "start",
	stringify: (option) => option.title,
});

export default function Filter() {
	const classes = useStyles();

	const [unit, setUnit] = React.useState(1);
	const [query, setQuery] = React.useState("");
	const [results, setReslts] = React.useState([]);

	const handleChange = (event) => {
		setUnit(event.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		history.push("/products");
		const result = await axios.get(
			"/api/v1/items/search?term=jacketsmens&api_key=123&page=1&limit=50",
		);
		console.log(result.data);
	};

	const getInfo = () => {
		axios
			.get(`${unit}?term=${query}&api_key=dfr4d57ft84sdq47f8ew`)
			.then(({ data }) => {
				console.log(data);
				setReslts(data.suggestions);
			})
			.catch((err) => console.log(err));
	};
	const handleInputChange = (e) => {
		setQuery(e.target.value);
		if (query.length > 0) {
			getInfo();
		}
	};

	return (
		<React.Fragment>
			<div class="flex">
				<div class="flex-initial text-gray-700 text-center  px-0 py-0 m-2 mr-0">
					<FormControl variant="standard" className={classes.formControl}>
						{/* <InputLabel htmlFor="filled-age-native-simple">Filter</InputLabel> */}
						<InputLabel id="demo-controlled-open-select-label">
							Category
						</InputLabel>
						<Select
							required
							labelId="demo-controlled-open-select-label"
							id="demo-controlled-open-select"
							value={unit}
							onChange={handleChange}
						>
							<MenuItem value="http://localhost:8080/api/v1/search">
								clothing
							</MenuItem>
							<MenuItem value="eeeee">
								<em>electronics</em>
							</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div class="flex-initial text-gray-700 text-center  px-0 py-0 m-4 ml-0">
					{/* <Autocomplete
							freeSolo
							className={classes.searchControl}
							id="filter-demo"
							onChange={handleInputChange}
							options={top100Films}
							getOptionLabel={(option) => option.title}
							filterOptions={filterOptions}
							style={{ width: 350 }}
							renderInput={(params) => (
								<TextField {...params} label="" variant="outlined" />
							)}
						/> */}
					<form onSubmit={handleSubmit}>
						<input
							className={classes.searchControl}
							type="text"
							onChange={handleInputChange}
							style={{ width: 380, height: 47, textIndent: "10px" }}
						/>
					</form>
					<ul style={{ backgroundColor: "#fff", zIndex: 100 }}>
						{results.map((e) => (
							<li
								style={{
									paddingTop: 10,
									zIndex: 100,
									textAlign: "left",
									marginLeft: 10,
								}}
							>
								{e}
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* <Grid container spacing={0}>
                <Grid item xs={6}>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        id="filter-demo"
                        onChange={(event, value) => console.log(value)}
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        filterOptions={filterOptions}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Custom filter" variant="outlined" />}
                    />
                </Grid>
            </Grid> */}
		</React.Fragment>
	);
}
