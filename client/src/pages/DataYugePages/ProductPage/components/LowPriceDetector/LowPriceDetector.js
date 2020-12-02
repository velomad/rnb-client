import React, { useEffect } from "react";
import { ProductSpecs } from "..";
import { Button } from "../../../../../components";
import Detector from "./Detector";

const LowPriceDetector = ({ stores, link , minPrice}) => {

	
	return (
		<div>
			{stores && stores.length > 0 && (
				<div className="py-4 p-2 shadow-xl m-4 rounded-md">
					{stores.map((el, index) =>
						Object.keys(el).map((elem) => (
							<Detector
								price={el[elem].product_price}
								image={el[elem].product_store_logo}
								index={index}
								lowIndex={minPrice}
							/>
						)),
					)}
					<div className="text-center py-2">
						<Button
							variant="primary"
							size="base"
							animate={true}
							handleClick={() => window.open(link, "_blank")}
						>
							buy now at lowest price
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default LowPriceDetector;
