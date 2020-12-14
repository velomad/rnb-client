import React from "react";
import { SearchBar, Text } from "../../../../../../components";
import { DynamicContent } from "../Menu";
import { connect } from "react-redux";
import "./primary.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { setSearchSlide, setSidebar } from "../../../../../../store/actions";
import { men, women } from "../Menu/DynamicContent/flipkartMenuData";
import { amazonmen, amazonwomen } from "../Menu/DynamicContent/amazonMenuData";
import { myntramen, myntrawomen } from "../Menu/DynamicContent/myntraMenuData";
import { ajiomen, ajiowomen } from "../Menu/DynamicContent/ajioMenuData";
import { snapdealmen, snapdealwomen } from "../Menu/DynamicContent/snapdealMenuData";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {
	tatacliqmen,
	tatacliqwomen,
} from "../Menu/DynamicContent/tatacliqMenuData";
import {
	bewakoofmen,
	bewakoofwomen,
} from "../Menu/DynamicContent/bewakoofMenuData";
import { SideBar } from "../../components";
const Primary = (props) => {
	const [open, setOpen] = React.useState(false);
	const [toggleSideBar, settoggleSideBar] = React.useState(false);
	const [openDrawer, setOpenDrawer] = React.useState(false);
	const [currentBrand, setCurrentBrand] = React.useState("");
	const [activeCat, setactiveCat] = React.useState("men");
	const [activePanel, setactivePanel] = React.useState("men");
	const [activatesmallPanel, activateSmallDrawer] = React.useState("");

	const loadDropDown = (brand) => {
		if (currentBrand === "") {
			setCurrentBrand(brand);
			!!brand ? setOpenDrawer(true) : setOpenDrawer(false);
		} else {
			hideDropDown();
			setOpenDrawer(false);
			setCurrentBrand(brand);
			setOpenDrawer(true);
		}
	};
	const activeCategory = (active) => {
		setactiveCat(active);
		setactivePanel(active);
	};
	const hideDropDown = () => {
		setCurrentBrand("");
		setOpenDrawer(false);
	};
	const showMenu = () => {
		open ? setOpen(false) : setOpen(true);
	};

	const getMenu = (menuName) => {
		activateSmallDrawer(menuName);
	};
	const toggleSideDrawer = (anchor, open) => {
		settoggleSideBar(true);
	};

	const toggler = (value) => {
		settoggleSideBar(value);
	};

	const handleClickAway = () => {
		console.log('click away navbar...');
		settoggleSideBar(false);
	};


	return (
		<React.Fragment>
			<SideBar toggleSideBar={toggleSideBar} setToggleState={toggler} />

			<nav className="container mx-auto px-0 space-y-0 lg:space-y-0 md:space-y-0 py-0 lg:py-0 lg:py-0 md:py-0 lg:py-0">
				<div className="flex flex-col md:flex-row md:justify-between md:items-center">
					<div className="flex justify-between items-center">
						<div className="flex items-center justify-between">
							<a
								className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
								href="#"
							>
								<img
									src="https://raw.githubusercontent.com/velomad/ReachNBuy/main/src/assets/img/logo.png"
									width="100px" style={{ width: '4rem' }}
								/>
							</a>

							<div class="flex flex-row py-0 pb-0 lg:pb-1 items-center md:pb-1 md:ml-4 lg:ml-4 overflow-auto w-full">
								<div className="hidden md:block">
									<div className="relative text-gray-600">
										<SearchBar />
									</div>
								</div>
								<div
									onClick={() => loadDropDown("amazon")}
									class="text-sm text-center mr-8 cursor-pointer"
								>
									<div class="p-1 border-2 border-white rounded-full">
										<div class="w-10 h-10 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-cover"
												src="/static/images/amazon.png"
												alt=""
											/>
										</div>
									</div>
									<p className="text-black font-bold"></p>
								</div>
								<div
									onClick={() => loadDropDown("flipkart")}
									class="text-sm text-center mr-8 cursor-pointer"
								>
									<div class="p-1 border-2 border-white rounded-full">
										<div class="hoverable w-10 h-10 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-cover"
												src="/static/images/flipkart.png"
												alt=""
											/>
										</div>
									</div>
									<p className="text-black font-bold"></p>
								</div>
								<div
									onClick={() => loadDropDown("myntra")}
									class="text-sm text-center mr-8 cursor-pointer"
								>
									<div class="p-1 border-2 border-white rounded-full">
										<div class="w-10 h-10 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-cover"
												src="/static/images/myntra.png"
												alt=""
											/>
										</div>
									</div>
									<p className="text-black font-bold"></p>
								</div>
								<div
									onClick={() => loadDropDown("ajio")}
									class="text-sm text-center mr-8 cursor-pointer"
								>
									<div class="p-1 border-2 border-white rounded-full">
										<div class="w-10 h-10 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-cover"
												src="/static/images/ajioicon.png"
												alt=""
											/>
										</div>
									</div>
									<p className="text-black font-bold"></p>
								</div>
								<div
									onClick={() => loadDropDown("tatacliq")}
									class="text-sm text-center mr-8 cursor-pointer"
								>
									<div class="p-1 border-2 border-white rounded-full">
										<div class="w-10 h-10 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-cover"
												src="/static/images/tatacliqicon.png"
												alt=""
											/>
										</div>
									</div>
									<p className="text-black font-bold"></p>
								</div>
								<div
									onClick={() => loadDropDown("bewakoof")}
									class="text-sm text-center mr-8 cursor-pointer"
								>
									<div class="p-1 border-2 border-white rounded-full">
										<div class="w-10 h-10 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-cover"
												src="/static/images/bewakoof.jpg"
												alt=""
											/>
										</div>
									</div>
									<p className="text-black font-bold"></p>
								</div>
								<div
									onClick={() => loadDropDown("snapdeal")}
									class="text-sm text-center mr-8 cursor-pointer"
								>
									<div class="p-1 border-2 border-white rounded-full">
										<div class="w-10 h-10 relative flex flex-shrink-0">
											<img
												class="shadow-md rounded-full w-full h-full object-cover"
												src="/static/images/snapdealicon.png"
												alt=""
											/>
										</div>
									</div>
									<p className="text-black font-bold"></p>
								</div>
							</div>

							<button
								onClick={() => props.setSidebar(true)}
								type="button"
								className="text-gray-500 ml-64 hidden md:block md:ml-24 lg:ml-24  hover:text-gray-600 focus:outline-none focus:text-gray-600"
								aria-label="toggle menu"
							>
								<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
									<path
										fillRule="evenodd"
										d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
									></path>
								</svg>
							</button>
						</div>

						<div className="flex md:hidden mb-4" onClick={() => showMenu()}>
							<SearchOutlinedIcon
								onClick={() => props.setSearchSlide(true)}
								className="text-white mx-2 px-1"
								fontSize="large"
							/>

							<button
								// onClick={() => toggleSideDrawer("right", true)}
								onClick={() => props.setSidebar(true)}
								type="button"
								className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
								aria-label="toggle menu"
							>
								<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
									<path
										fillRule="evenodd"
										d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
									></path>
								</svg>
							</button>
						</div>
					</div>
					{/* {open ? (
						<div class="md:flex items-center">
							<div class="mt-3 md:hidden">
								<div class="pt-2 relative mx-auto text-gray-600">
									<SearchBar />
								</div>
							</div>
						</div>
					) : (
						""
					)} */}
				</div>

				{openDrawer ? (
					<div
						className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl z-20"
						style={{ backgroundColor: "white" }}
					>
						<div className="container mt-0 lg:mt-0 md:mt-0 mx-auto w-full flex flex-wrap justify-between mx-2">
							<div className="w-full flex items-center justify-between text-gray-900 mb-6">
								<div>
									<Text
										classes="capitalize"
										size="xl"
										isTitle={true}
										variant="primary"
									>
										{currentBrand}
									</Text>
								</div>
								<div>
									<img
										src={`/static/images/${currentBrand}icon.${currentBrand === "bewakoof" ? "jpg" : "png"
											}`}
										width="30px"
									/>
								</div>
							</div>
							<section class="mt-0">
								<div className="flex justify-between">
									<div className="flex">
										<div
											className="cursor-pointer"
											onMouseEnter={() => activeCategory("men")}
										>
											<p className="text-1xl text-gray-900 font-bold mr-6">
												Men
											</p>
											{activeCat === "men" ? (
												<span class="inline-block h-1 w-12 rounded bg-pink-700 mt-1 mb-4"></span>
											) : (
													""
												)}
										</div>
										<div
											className="cursor-pointer"
											onMouseEnter={() => activeCategory("women")}
										>
											<p className="text-1xl text-gray-900 font-bold mr-4">
												Women
											</p>
											{activeCat === "women" ? (
												<span class="inline-block h-1 w-20 rounded bg-pink-700 mt-1 mb-4"></span>
											) : (
													""
												)}
										</div>
									</div>

									<div className="flex">
										<div className="w-full text-gray-900 mb-2">
											<svg
												onClick={() => hideDropDown()}
												className="cursor-pointer w-6 h-6 mb-2 bg-gray-400 text-gray rounded-full h-8 w-8 p-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											// xmlns="http://www.w3.org/2000/svg"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M6 18L18 6M6 6l12 12"
												></path>
											</svg>
										</div>
									</div>
								</div>
								<div class="border-t md:px-4 md:pt-0 md:pb-5">
									{activePanel == "men" ? (
										<div class="flex flex-wrap mx-auto overflow-y-scroll" style={{ height: '17rem' }}>
											<DynamicContent
												currentBrand={currentBrand}
												hideDropDown={hideDropDown}
												categories={Object.keys(
													currentBrand == "amazon"
														? amazonmen
														: currentBrand == "flipkart"
															? men
															: currentBrand == "myntra"
																? myntramen
																: currentBrand == "ajio"
																	? ajiomen
																	: currentBrand == "tatacliq"
																		? tatacliqmen
																		: currentBrand == "bewakoof"
																			? bewakoofmen
																			: currentBrand == "snapdeal"
																				? snapdealmen : ""
												)}
												activatesmallPanel={activatesmallPanel}
												activePanel={activePanel}
												onGetMenu={getMenu}
											/>
										</div>
									) : (
											""
										)}

									{activePanel === "women" ? (
										<div class="flex flex-wrap  mx-auto overflow-y-scroll" style={{ height: '17rem' }}>
											<DynamicContent
												currentBrand={currentBrand}
												hideDropDown={hideDropDown}
												categories={Object.keys(
													currentBrand == "amazon"
														? amazonwomen
														: currentBrand == "flipkart"
															? women
															: currentBrand == "myntra"
																? myntrawomen
																: currentBrand == "ajio"
																	? ajiowomen
																	: currentBrand == "tatacliq"
																		? tatacliqwomen
																		: currentBrand == "bewakoof"
																			? bewakoofwomen
																			: currentBrand == "snapdeal"
																				? snapdealwomen
																				: "",
												)}
												activatesmallPanel={activatesmallPanel}
												activePanel={activePanel}
												onGetMenu={getMenu}
											/>
										</div>
									) : (
											""
										)}
								</div>
							</section>
						</div>
					</div>
				) : (
						""
					)}
			</nav>
		</React.Fragment>
	);
};

export default connect(null, { setSearchSlide, setSidebar })(Primary);
