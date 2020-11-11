import { Divider, Grid, Typography } from "@material-ui/core";
import { Text } from "../../../../components";
import PriceFilter from "../../../MobileProductsPage/components/FiltersPopUp/PriceFilter";

const Filters = () => {
	return (
		<div>
			<div className="my-3">
				<Text weight={600} size="base" variant="secondary">
					PRICE
				</Text>
				<div className="mt-5">
					<PriceFilter />
				</div>
			</div>
			<div className="my-5">
				<Divider variant="fullWidth" />
			</div>
			<div>
				<Grid container className="my-3">
					<Text weight={600} size="base" variant="secondary">
						DISCOUNT
					</Text>
				</Grid>
				<Grid container spacing={2}>
					<Grid item>
						<input type="radio" id="male" name="gender" value="male" />
					</Grid>
					<Grid item>
						<Text size="sm" variant="primary">
							10% and above
						</Text>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item>
						<input type="radio" id="male" name="gender" value="male" />
					</Grid>
					<Grid item>
						<Text size="sm" variant="primary">
							20% and above
						</Text>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item>
						<input type="radio" id="male" name="gender" value="male" />
					</Grid>
					<Grid item>
						<Text size="sm" variant="primary">
							30% and above
						</Text>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item>
						<input type="radio" id="male" name="gender" value="male" />
					</Grid>
					<Grid item>
						<Text size="sm" variant="primary">
							40% and above
						</Text>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item>
						<input type="radio" id="male" name="gender" value="male" />
					</Grid>
					<Grid item>
						<Text size="sm" variant="primary">
							50% and above
						</Text>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item>
						<input type="radio" id="male" name="gender" value="male" />
					</Grid>
					<Grid item>
						<Text size="sm" variant="primary">
							60% and above
						</Text>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item>
						<input type="radio" id="male" name="gender" value="male" />
					</Grid>
					<Grid item>
						<Text size="sm" variant="primary">
							70% and above
						</Text>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Filters;
