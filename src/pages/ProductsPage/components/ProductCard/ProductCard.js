import { Paper, Grid } from "@material-ui/core";

const ProductCard = () => {
	return (
		<div className="my-3">
			<Grid container>
				<Paper
					elevation={2}
					style={{
						width: "210px",
						height: "350px",
					}}
				>
					<img src="https://m.media-amazon.com/images/I/61A4bKSgm4L._AC_UL320_.jpg" width="60px"/>
				</Paper>
			</Grid>
		</div>
	);
};
export default ProductCard;
