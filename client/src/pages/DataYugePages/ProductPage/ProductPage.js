import React from "react";
import { Text, Rating, Button } from "../../../components";

import {
	ProductSpecs,
	WebsiteThumbSlider,
	ProductImageSlider,
	LowPriceDetector,
} from "./components";
import qs from "query-string";
import { connect } from "react-redux";
import {
	setCompareProduct,
	setProductSpecsPopUp,
} from "../../../store/actions/";

const ProductPage = (props) => {
	const [productSpecsActive, setProductSpecsActive] = React.useState(false);
	const [productImages, setproductImages] = React.useState([]);
	const [product, setProduct] = React.useState([]);

	const {
		product_images,
		product_brand,
		product_model,
		product_name,
		product_mrp,
		product_ratings,
		available_colors,
		stores,
	} = props.productDetail;

	var storesToDisplay = [];
	if (stores) {
		stores.map((el, index) => {
			Object.keys(el).map((item, itemindex) => {
				if (el[item].length !== 0) {
					storesToDisplay.push(el);
				}
			});
		});
	}

	let LowCoststoreLink;
	if (storesToDisplay[0]) {
		LowCoststoreLink =
			storesToDisplay[0][Object.keys(storesToDisplay[0])].product_store_url;
	}

	const handleSpecsState = () => {
		props.setProductSpecsPopUp(true);
	};

	React.useEffect(() => {
		props.setCompareProduct(props.match.params.productId);
	}, []);

	return (
		<React.Fragment>
			{props.productDetailLoading === true ? (
				"Loading..."
			) : (
				<div>
					<ProductImageSlider productImages={product_images} />
					<div className="space-y-2 p-2 shadow-lg m-4 rounded-md">
						<div className="flex justify-between items-center">
							<div>
								<Text size="xl" weight="600" variant="primaryDark">
									{product_brand}
								</Text>
							</div>
							<div>
								<Button
									classes="p-2 border-2 border-gray rounded-md text-xs text-gray-600 title-font tracking-widest uppercase"
									handleClick={handleSpecsState}
								>
									view specs
								</Button>
							</div>
						</div>

						<div>
							<Text size="sm" variant="primary">
								{product_name}
							</Text>
						</div>

						<div className="flex space-x-6">
							<div>{Rating(product_ratings)}</div>
						</div>
						{available_colors && (
							<div className="flex space-x-6 items-center">
								<div>
									<Text
										variant="danger"
										size="md"
										weight="600"
										classes="uppercase"
									>
										colours
									</Text>
								</div>
								<div className="flex flex-wrap">
									{available_colors.map((el) => (
										<Text variant="primary" size="sm">
											{el},
										</Text>
									))}
								</div>
							</div>
						)}
					</div>
					<div className="space-y-6">
						<LowPriceDetector
							stores={storesToDisplay}
							link={LowCoststoreLink}
						/>
						<WebsiteThumbSlider stores={storesToDisplay} />
					</div>
					<ProductSpecs productId={props.match.params.productId} />
				</div>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = ({ dataYugeProductsState }) => ({
	productDetail: dataYugeProductsState.comparisonProductDetail,
	productDetailLoading: dataYugeProductsState.comparisonProductDetailLoading,
});

export default connect(mapStateToProps, {
	setCompareProduct,
	setProductSpecsPopUp,
})(ProductPage);
