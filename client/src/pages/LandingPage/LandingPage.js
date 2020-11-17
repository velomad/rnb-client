const { MainSlider } = require("./components");

const LandingPage = () => {
	return (
		<div className="bg-gray-200">
			<div className="grid gap-2 grid-cols-1 md:grid-cols-2 py-4">
				<div>
					<img
						class=" w-full h-56"
						src="static/images/clothing.jpg"
					/>
				</div>
				<div>
					<img
						class=" w-full h-56"
						src="static/images/electronic.jpg"
					/>
				</div>
			</div>
			<MainSlider />
		</div>
	);
};
export default LandingPage;
