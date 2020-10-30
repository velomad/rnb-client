import Page from "@material-ui/lab/Pagination";

const Pagination = () => {
	return (
		<div>
			<Page count={20} boundaryCount={1} color="secondary" />
		</div>
	);
};
export default Pagination;
