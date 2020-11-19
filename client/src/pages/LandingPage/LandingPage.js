import { WebsiteSlider, ProductSlider } from "./components";
import { Text } from "../../components";

const LandingPage = () => {
	return (
		<div className="bg-gray-200">
			<WebsiteSlider />

			<div className="grid gap-2 grid-cols-2 md:grid-cols-2 py-4 p-1">
				<div>
					<img
						className="rounded-lg object-cover w-full"
						style={{ height: "12rem" }}
						src="static/images/clothing.jpg"
					/>
				</div>
				<div>
					<img
						className="rounded-lg object-cover w-full"
						style={{ height: "12rem" }}
						src="static/images/electronic.jpg"
					/>
				</div>
			</div>
			<div
				className="bg-gray-100"
				// style={{
				// 	backgroundImage: `url(/static/images/tex.jpg)`,
				// 	backgroundSize:"100%",
				// 	backgroundRepeat:"no-repeat"
				// }}
			>
				<div className="py-4 px-4">
					<Text variant="primaryDark" weight="600" isTitle={true} size="sm" classes="uppercase">
						mobiles & accessories
					</Text>
				</div>
				<div className="py-12">
					<ProductSlider />
				</div>
			</div>
		</div>
	);
};
export default LandingPage;
