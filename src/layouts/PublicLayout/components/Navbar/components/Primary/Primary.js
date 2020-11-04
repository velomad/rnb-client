import React from "react";
import { SearchBar } from "../../../../../../components";
import { Flipkart } from "../Menu";
import { connect } from "react-redux";
import "./primary.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import {setSearchSlide} from "../../../../../../store/actions";


const Primary = (props) => {
	const [open, setOpen] = React.useState(false);
	const [openDrawer, setOpenDrawer] = React.useState(false);
	const [currentBrand, setCurrentBrand] = React.useState("");
	const [activeCat, setactiveCat] = React.useState("men");
	const [activePanel, setactivePanel] = React.useState("men");
	const [activatesmallPanel, activateSmallDrawer] = React.useState("");

	const loadDropDown = (brand) => {
		if (currentBrand === "") {
			setCurrentBrand(brand);
		}
		!!brand ? setOpenDrawer(true) : setOpenDrawer(false);
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

	return (
		<React.Fragment>
			<nav className="container mx-auto px-3 py-3 md:py-0 lg:py-0">
				<div className="flex flex-col md:flex-row md:justify-between md:items-center">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<a
								className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
								href="#"
							>
								<img
									src="https://raw.githubusercontent.com/velomad/ReachNBuy/main/src/assets/img/logo.png"
									width="100px"
								/>
							</a>

							<div className="mx-64 hidden md:block">
								<div className="relative text-gray-600">
									<SearchBar />
								</div>
							</div>
						</div>

						<div className="flex md:hidden" onClick={() => showMenu()}>
							<SearchOutlinedIcon onClick={() => props.setSearchSlide(true)} className="text-white mx-2 px-1" fontSize="large" />

							<button
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
				<div class="active-users flex flex-row p-0 pb-2 overflow-auto w-0 min-w-full">
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
									src="/static/images/ajio.png"
									alt=""
								/>
							</div>
						</div>
						<p className="text-black font-bold"></p>
					</div>
					<div
						onClick={() => loadDropDown("tataqcliq")}
						class="text-sm text-center mr-8 cursor-pointer"
					>
						<div class="p-1 border-2 border-white rounded-full">
							<div class="w-10 h-10 relative flex flex-shrink-0">
								<img
									class="shadow-md rounded-full w-full h-full object-cover"
									src="/static/images/tataqcliq.png"
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
				</div>
				{openDrawer ? (
					<div
						className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl z-20"
						style={{ backgroundColor: "white" }}
					>
						<div className="container mt-0 lg:mt-0 md:mt-0 mx-auto w-full flex flex-wrap justify-between mx-2">
							<div className="w-full text-gray-900 mb-2">
								<svg
									onClick={() => hideDropDown()}
									class="cursor-pointer w-6 h-6 mb-2"
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
							<section class="mt-0">
								<div className="flex">
									<div
										className="cursor-pointer"
										onMouseEnter={() => activeCategory("men")}
									>
										<p className="text-1xl text-gray-900 font-bold mr-6">Men</p>
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
								<div class="border-t md:px-4 md:pt-0 md:pb-5">
									{activePanel == "men" ? (
										<div class="flex flex-wrap  mx-auto">
											<Flipkart
												activatesmallPanel={activatesmallPanel}
												activePanel={activePanel}
												onGetMenu={getMenu}
											/>

											{/* {men.sections.map((element, index) => (
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div
													class="md:hidden"
													onClick={() => {
														smalldevicedrawer(index);
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
																{element}
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
														<p>{element}</p>
													</div>
												</a>
												<article
													className={
														activatesmallPanel === 0
															? "md:h-auto -mt-4 md:mt-0 overflow-hidden transition duration-700"
															: "h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden"
													}
												>
													<ul class="my-5 text-sm tracking-wide">
														{men.topwear.map(el => (
														<li class="my-3 tracking-wide">
															<a href="#">{el}</a>
														</li>
														))}
													</ul>
												</article>
											</section>
										))} */}

											{/* <section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div
													class="md:hidden"
													onClick={() => {
														smalldevicedrawer("footwear");
													}}
												>
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Footwear
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
														<p>Topwear</p>
													</div>
												</a>
												<article
													class={
														activatesmallPanel === "footwear"
															? ""
															: "h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden"
													}
												>
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Pellentesque rhoncus</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Aenean</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Curabitur bibendum</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Phasellus non mi</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Duis accumsa</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Curabitur nec enim</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Fusce ut augue</a>
														</li>
													</ul>
												</article>
											</section> */}
											{/* <section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Kurtas
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
														<p>Topwear</p>
													</div>
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Mauris mattis nunc</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Nunc viverra risus</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Etiam a libero</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Pyjamas
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
														<p>Topwear</p>
													</div>
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Cras id ipsum</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Footware
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
														<p>Topwear</p>
													</div>
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Sed a diam</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Nullam luctus felis</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Sed euismod</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Lingerie
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
													Integer interdum
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Dignissim gravida</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Eu mollis elit</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Hendrerit purus id</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Ut luctus dui tincidunt</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Pellentesque at ligula</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Pyjamas
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
													Quisque
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Finibus nulla eget</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Pellentesque</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Duis efficitur</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Cras at lacus</a>
														</li>
													</ul>
												</article>
											</section> */}
										</div>
									) : (
										""
									)}

									{activePanel === "women" ? (
										<div class="flex flex-wrap  mx-auto">
											<Flipkart
												activatesmallPanel={activatesmallPanel}
												activePanel={activePanel}
												onGetMenu={getMenu}
											/>
											{/* 
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Topwear
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
													Topwear
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Fusce vel sem</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Ut venenatis tellus</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Vestibulum</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Nunc at ipsum</a>
														</li>
													</ul>
												</article>
											</section> */}
											{/* <section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Jeans
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
													Ut porta
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Pellentesque rhoncus</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Aenean</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Curabitur bibendum</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Phasellus non mi</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Duis accumsa</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Curabitur nec enim</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Fusce ut augue</a>
														</li>
													</ul>
												</article>
											</section>
											{/* <section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Kurtas
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
													Praesent elementum
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Mauris mattis nunc</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Nunc viverra risus</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Etiam a libero</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Pyjamas
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
													Bottomwear
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Cras id ipsum</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Footware
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
													Donec a lorem
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Sed a diam</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Nullam luctus felis</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Sed euismod</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Lingerie
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
													Integer interdum
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Dignissim gravida</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Eu mollis elit</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Hendrerit purus id</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Ut luctus dui tincidunt</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Pellentesque at ligula</a>
														</li>
													</ul>
												</article>
											</section>
											<section class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/5">
												<div class="md:hidden">
													<div class="grid grid-cols-2 gap-56">
														<div>
															<button
																onclick="toggleFooterSection(event)"
																class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
																type="button"
															>
																Pyjamas
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
													Quisque
												</a>
												<article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
													<ul class="my-5 text-sm tracking-wide">
														<li class="my-3 tracking-wide">
															<a href="#">Finibus nulla eget</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Pellentesque</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Duis efficitur</a>
														</li>
														<li class="my-3 tracking-wide">
															<a href="#">Cras at lacus</a>
														</li>
													</ul>
												</article>
											</section> */}
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

export default connect(null, {setSearchSlide})(Primary);
