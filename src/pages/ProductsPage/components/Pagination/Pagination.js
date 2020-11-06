import Page from "@material-ui/lab/Pagination";

const Pagination = (props) => {
	return (
		<div>
			<Page count={props.totalProducts} boundaryCount={1} color="secondary" />
		</div>
	);
};
export default Pagination;
