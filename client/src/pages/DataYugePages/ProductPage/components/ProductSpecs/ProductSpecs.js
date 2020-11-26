import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Rating, Text } from "../../../../../components";

const ProductSpecs = (props) => {
	console.log("specs", props.specs.sub_specs);

	return (
		<React.Fragment>
			{props.productDetails.map((el, index) => {
				return (
					<div key={index} className="m-4 shadow-lg p-2 rounded-md">
						<div>
							<Text variant="primaryDark" size="base">
								{el.product.productTitle}
							</Text>
						</div>

						<div>
							<Text size="lg" variant="black" weight="600">
								&#x20B9; {el.product.productLowestPrice}
							</Text>
						</div>

						<h4 className="font-bold text-gray-700">
							{Rating(props.productDetails[0].product.productRating)}
						</h4>

						{/* <h4 className='text-bold text-black'>{el.product.productLink}</h4> */}
					</div>
				);
			})}
			<div className="p-4">
				<Text variant="primary" isTitle={true} classes="uppercase">
					Specificaions
				</Text>
			</div>
			<ul className="shadow-lg m-4 rounded-md ">
				{props.specs &&
				props.specs.main_specs &&
				props.specs.main_specs.length > 0 ? (
					props.specs.main_specs.map((el, index) => {
						return (
							<li className="p-2 py-1" key={index}>
								<Text variant="primary ">
									<ArrowRightIcon /> {el}
								</Text>
							</li>
						);
					})
				) : (
					<li className="font-bold text-gray-700 ml-4">Not Available</li>
				)}
			</ul>
			{props.specs && props.specs.sub_specs ? (
				Object.keys(props.specs.sub_specs).map((el, index) => {
					return (
						<React.Fragment>
							<div className="py-2">
								<Divider />
							</div>
							<Text
								key={index}
								variant="primaryDark"
								weight="600"
								classes="ml-4"
							>
								{el}
							</Text>
							<Grid container spacing={0}>
								{props.specs.sub_specs[el].map((item, itemindex) => {
									return (
										<React.Fragment>
											<Grid item xs={6} className="space-y-4">
												<div className="ml-4 mr-4 mt-2 mb-2">
													<Text variant="primary" key={itemindex}>
														{item.spec_key}
													</Text>
												</div>
											</Grid>
											<Grid item xs={6}>
												<div className="ml-4 mr-4 mt-2 mb-2">
													<Text variant="primary" key={itemindex}>
														{item.spec_value}
													</Text>
												</div>
											</Grid>
										</React.Fragment>
									);
								})}
							</Grid>
						</React.Fragment>
					);
				})
			) : (
				<h4>No data</h4>
			)}
		</React.Fragment>
	);
};

export default ProductSpecs;
