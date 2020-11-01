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
			<div className="w-full relative" style={{ height: "22rem" }}>
				<div className="absolute p-1 bg-gray-900 z-10">
					<Text size="xs" variant="white">
						{discount}
					</Text>
				</div>
				<div className="flex justify-center transition duration-700 ease-in-out transform hover:-translate-y-1">
					<img src={image} class="object-contain h-50 w-full" />
				</div>
				<div className="p-1">
					<div>
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
							{priceStrike}
						</Text>
					</div>
				</div>
				<div className="flex px-1 space-x-4">
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
