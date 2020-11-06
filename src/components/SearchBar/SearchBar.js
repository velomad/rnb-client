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
        position: 'absolute',
        left: '1px',
        top: '0px',
        minWidth: 120,
        background: '#fff',
        borderRadius: '40px',
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
    searchsuggestions: {
        borderTop: '1px solid #ccc',
        position: 'absolute',
        zIndex: '999',
        width: '23rem',
        marginLeft: '6rem',
        background: 'white',
        bordeRadius: '4px',
        maxHeight: '200px',
        overflowY: 'auto'
    },
    suggestiontext:{
        cursor: 'pointer',
        textTransform: 'capitalize',
        fontWeight: '600',
        paddingTop: '8px',
        '&:hover': {
            background: "#F2F2F2",
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
    const [inputValue, setInputValue] = React.useState("");
    const [inputSearch, setInputSearch] = React.useState("");
    const [options, setOptions] = React.useState([]);
    const [searchState, setsearchState] = React.useState(false);


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
        setsearchState(true);
        setInputValue(value);
        debounceOnChange(value);
    }

    React.useEffect(() => {
        let active = true;
        setsearchState(true);
        (async () => {
            if (!!inputValue) {
                const response = await axios.get(
                    `${unit}?term=${inputValue}&api_key=dfr4d57ft84sdq47f8ew`
                );

                if (active) {
                    let searchData = [];
                    console.log(response.data.suggestions);
                    response.data.suggestions.map((item) => {
                        searchData.push({ 'display_name': item })
                    })
                    console.log('searchData', searchData)
                    setOptions(searchData);
                    setsearchState(false)
                }
            }else{
                setOptions([]);
            }
        })();
    }, [inputSearch]);

    return (
        <React.Fragment>
            <div class="flex">
                <div class="flex-initial text-gray-700 text-center  px-0 py-0 m-2 mr-0">
                </div>
                <div class="flex-initial text-gray-700 text-center px-0 py-0 m-4 ml-0">
                    <div class="relative text-gray-600">
                        <input type="text" name="serch" placeholder="Search"
                            onChange={(event) => handleChange(event.target.value)}
                            class="bg-white h-10 w-full px-32 pr-48 rounded-full text-sm focus:outline-none" />
                        <select
                            className='absolute outline-none rounded-full p-2 mt-1 mr-1 left-0 top-0'
                            value={unit}
                            onChange={(event, value) => setUnit(value)}
                        >
                            <option selected value={'http://localhost:8080/api/v1/search'}>Clothing</option>
                            <option value={2}>Electronics</option>
                        </select>

                        <button type="submit" class="bg-red-600 absolute rounded-full right-0 top-0 p-2 mt-1 mr-1">
                            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966" style={{ enableBackground: "new 0 0 56.966 56.966", color: '#fff' }}
                                width="512px" height="512px">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    {
                        options.length > 0 ?
                            <ul className={classes.searchsuggestions}>
                                {
                                    searchState ? <li className={classes.suggestiontext}>Loading...</li> : options.map((item, index) => {
                                        return (
                                            <li key={index} className={classes.suggestiontext}>{item.display_name}</li>
                                        )
                                    })
                                }
                            </ul> : ""
                    }
                </div>
            </div>
        </React.Fragment>
    );
}
