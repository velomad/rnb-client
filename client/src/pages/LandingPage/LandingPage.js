const { WebsiteSlider } = require("./components");

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
		</div>
	);
};
export default LandingPage;
