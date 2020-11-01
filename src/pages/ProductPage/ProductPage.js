import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, Button } from "../../components";
import { Grid } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {history} from '../../utils';

const ProductPage = (props) => {
	const [product, setproduct] = useState({});

	const productId = props.match.params.id;
	useEffect(() => {
		getInfo();
	}, []);

	const getInfo = async () => {
		const result = await Axios.get(
			`/api/v1/product?id=${productId}&api_key=123`,
		);
		setproduct(result.data.result);
	};

	return (
		<section class="text-gray-700 body-font overflow-hidden">
			<div class="container px-5 py-20 mx-auto">
				<ArrowBackIcon fontSize="large" onClick={()=>history.goBack()} className="cursor-pointer"/>
				<div class="lg:w-4/5 mx-auto flex flex-wrap items-center relative mt-6">
					<img
						alt="ecommerce"
						className="lg:w-1/2 object-contain w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
						style={{ height: "25rem" }}
						src={product.imageUrl}
					/>
					<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<Text size="xl" variant="danger" weight="700">
							{product.website}
						</Text>
						<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
							{product.brandName}
						</h1>
						<h2 class="text-lg title-font text-gray-500 tracking-widest">
							{product.productName}
						</h2>

						{product.size &&
							product.size.map((e) => (
								<div className="inline-block mr-8 mt-5">
									<div className="bg-gray-900 text-white radius rounded-full h-10 w-10 flex justify-center items-center hover:bg-red-500 animate duration-500 ease-in-out">
										{e}
									</div>
								</div>
							))}

						<hr className="my-5" />
						<Grid container justify="space-between">
							<Grid item>
								<Grid container spacing={3}>
									<Grid item>
										<Text size="xl" variant="secondary">
											{product.productPrice}
										</Text>
									</Grid>
									<Grid item>
										<Text size="xl" variant="primary">
											<del>{product.productPriceStrike}</del>
										</Text>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Button size="small" variant="primary" animate={true}>
									Buy Now
								</Button>
							</Grid>
						</Grid>
						<div className="mt-2">
							<Text size="base" variant="danger" weight="600">
								{product.discountPercent}
							</Text>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
