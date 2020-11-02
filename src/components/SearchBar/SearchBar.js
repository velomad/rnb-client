/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    formControl: {

        margin: theme.spacing(1),
        marginRight: theme.spacing(0),
        minWidth: 120,
        background: '#fff',
        borderRadius: '4px',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px'
    },
    searchControl: {
        background: '#fff',
        borderRadius: '4px',
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
        width: '460px',
        [theme.breakpoints.down('sm')]: {
            width: '170px',
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
}

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

export default function Filter() {
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState("shirts");
    const [inputSearch, setInputSearch] = React.useState("");
    const [options, setOptions] = React.useState([]);
    React.useEffect(() => {
        //   top100Films.push({ title: 'The Shawshank Redemption', year: 1994 })
    });

    const [unit, setUnit] = React.useState('http://localhost:8080/api/v1/search');

    const debounceOnChange = React.useCallback(
        debounce(value => {
            setInputSearch(value);
        }, 400),
        []
    );

    const [open, setOpen] = React.useState(false);
    const loading = open && options.length === 0;

    function handleChange(value) {
        setInputValue(value);
        debounceOnChange(value);
    }

    React.useEffect(() => {
        let active = true;

        (async () => {
            const response = await axios.get(
                `${unit}?term=${inputValue}&api_key=dfr4d57ft84sdq47f8ew`
            );

            if (active) {
                let searchData = [];
                console.log(response.data.suggestions);
                response.data.suggestions.map((item) =>{
                    searchData.push({'display_name':item})
                })
                setOptions(searchData);
            }
        })();
    }, [inputSearch]);

    return (
        <React.Fragment>
            <div class="flex">
                <div class="flex-initial text-gray-700 text-center  px-0 py-0 m-2 mr-0">
                    <FormControl variant="filled" className={classes.formControl}>
                        {/* <InputLabel htmlFor="filled-age-native-simple">Filter</InputLabel> */}
                        <Select
                            native
                            value={unit}
                            onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'filled-age-native-simple',
                            }}
                        >
                            {/* <option aria-label="None" value="">All</option> */}
                            <option selected value={'http://localhost:8080/api/v1/search'}>Clothing</option>
                            <option value={2}>Electronics</option>
                        </Select>
                    </FormControl>
                </div>
                <div class="flex-initial text-gray-700 text-center  px-0 py-0 m-4 ml-0">
                    <Autocomplete
                        freeSolo
                        options={options}
                        className={classes.searchControl}
                        getOptionLabel={option => option.display_name}
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        autoComplete
                        loading={loading}
                        inputValue={inputValue}
                        includeInputInList
                        disableOpenOnFocus
                        onChange={(event, newValue) => console.log(newValue)}
                        renderInput={params => (
                            <TextField
                                {...params}
                                label=""
                                variant="outlined"
                                onChange={event => handleChange(event.target.value)}
                                fullWidth
                            />
                        )}
                        renderOption={option => {
                            return <div>{option.display_name}</div>;
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 }
];
