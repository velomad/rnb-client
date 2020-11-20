import React, { useState } from "react";
import { Text, Button } from "../../../../../components";
import { history } from "../../../../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PriceCheck from "./PriceCheck";
const ProductCard = ({
	canCompare,
	productId,
	productImage,
	productLink,
	productLowestPrice,
	productRating,
	productTitle,
	epic,
}) => {
	const [priceCheck, setPriceCheck] = useState(false);

	return (
		<React.Fragment>
			<div
				className={`w-full h-full p-1 border-b-2  ${
					epic % 2 !== 0 && "border-l-2"
				}`}
			>
				<div className={`grid grid-cols-2 absolute h-48 ${priceCheck ? "visible" : "invisible"}`}>
					<PriceCheck />
				</div>
				<div className="flex justify-center">
					{productImage !== null ? (
						<LazyLoadImage
							effect="blur"
							src={productImage}
							key={productId}
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
						{/* <div
                                    style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <Text size="base" weight="600" variant="primaryDark">
                                        {productTitle}
                                    </Text>
                                </div> */}
						<div
							style={{
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
							}}
						>
							<Text size="sm" weight="500" variant="primary">
								{productTitle}
							</Text>
						</div>
					</div>
					<div className="flex px-1 space-x-4">
						{productLowestPrice && (
							<div>
								<Text size="sm" weight="600" variant="secondary">
									&#8377; {productLowestPrice}
								</Text>
							</div>
						)}
						{/* {price !== priceStrike && priceStrike !== null ? (
                                    <div>
                                        <Text size="sm" weight="600" variant="primary">
                                            <del>&#8377; {priceStrike}</del>
                                        </Text>
                                    </div>
                                ) : null} */}
					</div>
					<div className="flex justify-between p-1">
						<div>
							<Button
								size="small"
								variant="primary"
								animate={true}
								handleClick={() => setPriceCheck(true)}
							>
								price Check
							</Button>
						</div>
						{productRating && (
							<div>
								<Text size="xs" variant="primary">
									Rating :{productRating}
								</Text>
							</div>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductCard;
