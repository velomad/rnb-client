import React from 'react';
import { Text } from "../../../../../components";
import { history } from "../../../../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProductCard = ({
    canCompare,
    productId,
    productImage,
    productLink,
    productLowestPrice,
    productRating,
    productTitle,
    epic
}) => {
    return (
        <React.Fragment>

            {/* <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden border-2">
                        <div class="flex items-end justify-end h-56 w-full bg-cover">
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">Chanel</h3>
                            <span class="text-gray-500 mt-2">$12</span>
                        </div>
                    </div> */}
            <div className={epic % 2 !== 0 ?"w-full h-full border-b-2 border-l-2":"w-full h-full border-b-2"}>
                {/* {false !== null && discount !== "Ne" ? (
                            <div className="absolute p-1 bg-gray-900 z-10">
                                <Text size="xs" variant="white">
                                    {discount}% Off
						</Text>
                            </div>
                        ) : null} */}

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
                    <div className="flex space-x-4 p-1">
                        {/* <div>
                                    <Text size="xs" variant="danger">
                                        {website}
                                    </Text>
                                </div> */}
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
}

export default ProductCard;