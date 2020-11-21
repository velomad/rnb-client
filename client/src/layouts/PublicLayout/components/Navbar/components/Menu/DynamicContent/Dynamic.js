import React from "react";
import { men, women } from "./flipkartMenuData";
import { amazonmen, amazonwomen } from "./amazonMenuData";
import { myntramen, myntrawomen } from "./myntraMenuData";
import { ajiomen, ajiowomen } from "./ajioMenuData";
import { tatacliqmen, tatacliqwomen } from "./tatacliqMenuData";
import { bewakoofmen, bewakoofwomen } from "./bewakoofMenuData";
import { snapdealmen, snapdealwomen } from "./snapdealMenuData";
import { history } from "../../../../../../../utils";

const DynamicContent = (props) => {
	const [webCategoriesMen, setWebCategoriesMen] = React.useState([]);
	const [webCategoriesWomen, setWebCategoriesWomen] = React.useState([]);

	const setMenuItems = (activate) => {
		props.onGetMenu(activate);
	};

	const handleCategoryClick = (categoryName) => {
		props.hideDropDown();
		history.push(
			`/products?website=${props.currentBrand}&category=` + categoryName,
		);
	};
	React.useEffect(() => {
		if (props.currentBrand == "amazon") {
			console.log("amazonmen", amazonmen);
			console.log("amazonwomen", amazonwomen);
			setWebCategoriesMen(amazonmen);
			setWebCategoriesWomen(amazonwomen);
		} else if (props.currentBrand == "flipkart") {
			setWebCategoriesMen(men);
			setWebCategoriesWomen(women);
		} else if (props.currentBrand == "myntra") {
			setWebCategoriesMen(myntramen);
			setWebCategoriesWomen(myntrawomen);
		} else if (props.currentBrand == "ajio") {
			setWebCategoriesMen(ajiomen);
			setWebCategoriesWomen(ajiowomen);
		} else if (props.currentBrand == "tatacliq") {
			setWebCategoriesMen(tatacliqmen);
			setWebCategoriesWomen(tatacliqwomen);
		} else if (props.currentBrand == "bewakoof") {
			setWebCategoriesMen(bewakoofmen);
			setWebCategoriesWomen(bewakoofwomen);
		}else if (props.currentBrand == "snapdeal") {
			setWebCategoriesMen(snapdealmen);
			setWebCategoriesWomen(snapdealwomen);
		}
	}, [props]);
	return (
		<React.Fragment>
			{props.categories.map((el, index) => (
				<section
					key={el}
					className=" opacity-100 relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-64"
				>
					<div
						class="md:hidden"
						onClick={() => {
							setMenuItems(el);
						}}
					>
						<div class="grid grid-cols-2 gap-56 ">
							<div className="flex items-center">
								<button
									class="uppercase text-xs font-semibold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
									type="button"
								>
									{props.activePanel === "men"
										? el.split("-")[1]
										: el.split("-")[1]}
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
					<div>
						<a
							class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
							href="#"
						>
							<div className="flex items-center">
								{/* <img
								src={`/static/images/${el.split('-')[1]}.png`}
								width="50px"
								className="mr-1"
							/> */}
								<p className="font-semibold">{el.split("-")[1]}</p>
							</div>
						</a>
						<article
							className={
								props.activatesmallPanel === el
									? "md:h-auto -mt-4 md:mt-0 overflow-hidden transition duration-700"
									: "h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden"
							}
						>
							<ul class="my-5 text-sm tracking-wide">
								{props.activePanel === "men" && !!webCategoriesMen[el]
									? webCategoriesMen[el].map((el, index) => (
											<li
												key={index + "men"}
												onClick={() => handleCategoryClick(el)}
												class="my-3 tracking-wide capitalize"
											>
												{/* {props.currentBrand == 'myntra'?el.split('-')[1]:props.currentBrand == 'tatacliq' || 'bewakoof' ?el.split('-men')[0].replace('-',' '):el} */}
												{props.currentBrand == "myntra"
													? el.split("-").join(" ")
													: props.currentBrand == "tatacliq" || "bewakoof"
													? el.split("-").join(" ")
													: el.split("-").join(" ")}
											</li>
									  ))
									: null}
								{props.activePanel !== "men" && !!webCategoriesWomen[el]
									? webCategoriesWomen[el].map((el, index) => (
											<li
												key={index + "women"}
												onClick={() => handleCategoryClick(el)}
												class="my-3 tracking-wide capitalize"
											>
												{/* {props.currentBrand == "myntra"
												? el.split("-")[1]
												: props.currentBrand == "tatacliq" || "bewakoof"
												? el.split("-women")[0].replace("-", " ")
												: el} */}
												{props.currentBrand == "myntra"
													? el.split("-").join(" ")
													: props.currentBrand == "tatacliq" || "bewakoof"
													? el.split("-").join(" ")
													: el.split("-").join(" ")}
											</li>
									  ))
									: null}
							</ul>
						</article>
					</div>
				</section>
			))}
		</React.Fragment>
	);
};

export default DynamicContent;
