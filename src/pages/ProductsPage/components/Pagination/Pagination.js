import Page from "@material-ui/lab/Pagination";

const Pagination = () => {
	return (
		<div>
			<Page count={20} boundaryCount={2} color="secondary" />
		</div>
	);
};
export default Pagination;
