import { Text } from "../../../../components";
import { history } from "../../../../utils";

const MProductCard = ({
	image,
	website,
	price,
	priceStrike,
	name,
	brand,
	discount,
	rating,
	id,
}) => {

	
	const handleProductClick = () => {
		history.push("/product/"+id)
	};


	return (
		<div>
			<div
					onClick={handleProductClick}
				className="w-full p-1 bg-gray-200 relative"
				style={{ height: "100%" }}
			>
				{priceStrike !== price ? (
					<div className="absolute p-1 bg-gray-900 z-10">
						<Text size="xs" variant="white">
							{discount}
						</Text>
					</div>
				) : null}

				<div className="flex justify-center ">
					<img src={image} className="object-contain h-48 w-full" />
				</div>
				<div className="p-1">
					<div
						style={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						<Text size="base" weight="600" variant="secondary">
							{brand}
						</Text>
					</div>
					<div
						style={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						<Text size="sm" weight="500" variant="primary">
							{name}
						</Text>
					</div>
				</div>
				<div className="flex px-1 space-x-4">
					<div>
						<Text size="sm" weight="600">
							{price}
						</Text>
					</div>
					{price !== priceStrike && (
						<div>
							<Text size="sm" weight="600" variant="primary">
								<del>{priceStrike}</del>
							</Text>
						</div>
					)}
				</div>
				<div className="flex space-x-4  p-1">
					<div>
						<Text size="xs" variant="danger">
							{website}
						</Text>
					</div>
					{rating && (
						<div>
							<Text size="xs" variant="primary">
								Rating :{rating}
							</Text>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default MProductCard;
