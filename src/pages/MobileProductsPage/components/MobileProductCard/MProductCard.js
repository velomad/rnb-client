import { Text } from "../../../../components";

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
	return (
		<div>
			<div className="w-full p-1 bg-gray-200 relative" style={{ height: "100%" }}>
				<div className="absolute p-1 bg-gray-900 z-10">
					<Text size="xs" variant="white">
						{discount}
					</Text>
				</div>
				<div className="flex justify-center ">
					<img src={image} class="object-contain h-50 w-full" />
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
					<div>
						<Text size="sm" weight="600" variant="primary">
							<del>
							{priceStrike}
							</del>
						</Text>
					</div>
				</div>
				<div className="flex space-x-4  p-1">
					<div>
						<Text size="xs" variant="danger">
							{website}
						</Text>
					</div>
					<div>
						<Text size="xs" variant="primary">
							Rating :{rating}
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MProductCard;
