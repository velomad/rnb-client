import React from "react";
import axios from "axios";
import { ProductCard } from "./components";
import { Button } from "../../../components";
const ProductsPage = (props) => {
	var currentPage = 1;
	const [productData, setProductData] = React.useState([]);
	const [hasProducts, sethasProducts] = React.useState(true);
	const [page, setPage] = React.useState(1);
	React.useEffect(() => {
		if(props.match.params.category){
			currentPage = 1;
			fetchData(props.match.params.category);
		}
	}, [props.match.params.category]);
	const fetchData = (newval) => {
		if(!!newval){
			currentPage = 1;
		}else{
			currentPage += 1;
		}
		axios
			.get(
				`https://price-api.datayuge.com/api/v1/compare/list?api_key=nt5N7VXa0hYPHiIwRTJKZpwFiMjzvcicnoS&sub_category=${props.match.params.category}&can_compare=1&page=${currentPage}`,
			)
			.then((response) => {
				if (response.data.data === "end of results") {
					sethasProducts(false);
				} else {
					sethasProducts(true);
					let totalProducts = [];
					console.log("response.data", response.data.data);
					totalProducts = [...productData, ...response.data.data];
					console.log("Total Products", totalProducts);
					setProductData(totalProducts);
				}
			})
			.catch((err) => {
				console.log("Error fetching datayuge", err);
			});
	};

	const getMoreProducts = () => {
		fetchData(null);
	};
	return (
		<React.Fragment>
			<div>
				<div class="grid gap-0 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 px-2 mb-6">
                    
					{productData.map((el, index) => {
						return (
							<ProductCard
								key={index}
								epic={index}
								canCompare={el.can_compare}
								productId={el.product_id}
								productImage={el.product_image}
								productLink={el.product_link}
								productLowestPrice={el.product_lowest_price}
								productRating={el.product_rating}
								productTitle={el.product_title}
							/>
						);
					})}
				</div>
			</div>
			<div className="text-center mb-6">
				{hasProducts ? (
					<Button
						handleClick={() => getMoreProducts()}
						size="base"
						variant="primary"
						classes="w-32"
					>
						View More
					</Button>
				) : (
					<h4 className="font-bold text-gray-700">No More Products Found</h4>
				)}
			</div>
		</React.Fragment>
	);
};

export default ProductsPage;
