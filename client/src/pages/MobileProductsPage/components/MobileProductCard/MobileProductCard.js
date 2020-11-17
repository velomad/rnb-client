import { Text } from "../../../../components";
import { history } from "../../../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
		history.push("/product/" + id);
	};

	return (
		<div>
			<div onClick={handleProductClick} className="w-full p-1 h-full">
				{discount !== null && discount !== "Ne" ? (
					<div className="absolute p-1 bg-gray-900 z-10">
						<Text size="xs" variant="white">
							{discount}% Off
						</Text>
					</div>
				) : null}

				<div className="flex justify-center">
					{image !== null ? (
						<LazyLoadImage
							effect="blur"
							src={image}
							key={id}
							className="object-contain h-48 w-full"
						/>
					) : (
						<div className="object-contain h-48 w-full flex">
							<div className="m-auto">
								<Text size="base" variant="primary">
									No Image
								</Text>
							</div>
						</div>
					)}
				</div>
				<div>
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
						{price && (
							<div>
								<Text size="sm" weight="600">
									&#8377; {price}
								</Text>
							</div>
						)}
						{price !== priceStrike && priceStrike !== null ? (
							<div>
								<Text size="sm" weight="600" variant="primary">
									<del>&#8377; {priceStrike}</del>
								</Text>
							</div>
						) : null}
					</div>
					<div className="flex space-x-4 p-1">
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
		</div>
	);
};
export default MProductCard;
