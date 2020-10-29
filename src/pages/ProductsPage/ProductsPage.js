import { Divider, Grid } from "@material-ui/core";
import { Button, Text } from "../../components";
import { Filters, Heading, Pagination , ProductCard} from "./components";

const ProductsPage = () => {
	return (
		<div>
			<div className="my-3">
				<Heading />
			</div>
			<hr style={{ color: "solid black 1px" }} />
			<Grid container>
				<Grid item xs={12} md={2}>
					<Filters />
				</Grid>
				<Grid item>
					<Divider orientation="vertical" variant="middle" />
				</Grid>
				<Grid item>
				<ProductCard />
				</Grid>
			</Grid>
			<hr style={{ color: "solid black 1px", marginTop: 15 }} />
			<div className="flex py-2 justify-center">
				<Pagination />
			</div>
		</div>
	);
};

export default ProductsPage;
