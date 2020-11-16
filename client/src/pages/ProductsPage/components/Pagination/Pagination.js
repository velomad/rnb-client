import React from "react";
import Page from "@material-ui/lab/Pagination";

const Pagination = (props) => {
	const [page, setPage] = React.useState(1);
	const handleChange = (event, value) => {
	  setPage(value);
	  props.setPageNumber(value)
	};
  
	return (
		<div>
			<Page count={Math.ceil(props.totalProducts/30)} color="secondary" page={page} onChange={handleChange}  />
		</div>
	);
};
export default Pagination;
