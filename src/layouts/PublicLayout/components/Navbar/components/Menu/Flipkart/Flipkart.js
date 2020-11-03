import { men, women } from "./flipkartMenuData";
import { history } from "../../../../../../../utils";

const Flipkart = (props) => {
	const setMenuItems = (activate) => {
		props.onGetMenu(activate);
	};

	const handleCategoryClick = (categoryName) => {
		history.push("/products/flipkart?category=" + categoryName);
	};
	return (
		<div>
			{["topwear","ethnicwear", "bottomwear","sportswear", "bags"].map((el) => (
				<section
					key={el}
					class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5"
				>
					<div
						class="md:hidden"
						onClick={() => {
							setMenuItems(el);
						}}
					>
						<div class="grid grid-cols-2 gap-56">
							<div className="flex items-center">
								<img
									src="/static/images/topwear.png"
									width="50px"
									className="mr-1"
								/>
								<button
									class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
									type="button"
								>
									{props.activePanel === "men" ? el : el}
								</button>
							</div>
							<div className="pt-3">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</div>
						</div>
					</div>
					<a
						class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
						href="#"
					>
						<div className="flex items-center">
							<img
								src="/static/images/topwear.png"
								width="50px"
								className="mr-1"
							/>
							<p>{el}</p>
						</div>
					</a>
					<article
						className={
							props.activatesmallPanel === "topwear"
								? "md:h-auto -mt-4 md:mt-0 overflow-hidden transition duration-700"
								: "h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden"
						}
					>
						<ul class="my-5 text-sm tracking-wide">
							{props.activePanel === "men" && !!men[el]  
								? men[el].map((el, index) => (
										<li
											key={index + "men"}
											onClick={() => handleCategoryClick(el)}
											class="my-3 tracking-wide"
										>
											{el}
										</li>
								  ))
								: !!women[el]  ? women[el].map((el, index) => (
										<li
											key={index + "women"}
											onClick={() => handleCategoryClick(el)}
											class="my-3 tracking-wide"
										>
											{el}
										</li>
								  )): null}
						</ul>
					</article>
				</section>
			))}
		</div>
	);
};

export default Flipkart;
