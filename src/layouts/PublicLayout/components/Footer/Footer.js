import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Divider } from "@material-ui/core";

const Footer = () => {
	return (
		<React.Fragment>
			<footer class="text-gray-700 bg-gray-900 body-font">
				<div class="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
					<div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
							<img
								src="https://raw.githubusercontent.com/velomad/ReachNBuy/main/src/assets/img/logo.png"
								width="150"
							/>
						</a>
						<p class="mt-2 text-sm text-gray-500">
							Your Personalized Shopping Assistant
						</p>
					</div>
					<div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						<div class="lg:w-1/3 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">
								COMPANY
							</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										About Us
									</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										Terms & Conditions
									</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										Privacy Policy
									</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/3 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">
								CONNECT
							</h2>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										<div className="items-center py-2">
											<div className="mr-2">
												<FacebookIcon /> Facebook
											</div>
										</div>
									</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										<div className="items-center py-2">
											<div className="mr-2">
												<InstagramIcon /> Instagram
											</div>
										</div>
									</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/3 md:w-1/2 w-full px-4">
							<button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="w-6 h-6"
									viewBox="0 0 512 512"
								>
									<path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
								</svg>
								<span class="ml-4 flex items-start flex-col leading-none">
									<span class="text-xs text-gray-600 mb-1">GET IT ON</span>
									<span class="title-font font-medium">Google Play</span>
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="w-68 h-1 mx-auto container bg-gray-500 rounded mt-1"></div>
				<div class="container px-2 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
					<div class="flex-grow text-center flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<h1 class=" text-gray-100 tracking-widest text-xl mb-3">
								Men's Clothing 
							</h1>
							{/* <nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										
									</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										Terms & Conditions
									</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										Privacy Policy
									</a>
								</li>
							</nav> */}
							<div className="grid grid-cols-2 gap-1 mb-10 text-left">
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									T-shirts
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Casual Shirts
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Formal Shirts
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Jackets
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Blazers
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Suits
								</div>
							</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<h1 class=" text-gray-100 tracking-widest text-xl mb-3">
								Women's Clothing
							</h1>
							<div className="grid grid-cols-2 gap-1 mb-10 text-left">
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Jeans Jeggings
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Jackets Coats
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Shrugs
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Casual Shoes
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Shoulder Bags
								</div>
								<div className="text-gray-600 hover:text-gray-300 cursor-pointer">
									Skin Care
								</div>
							</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<h1 class=" text-gray-100 tracking-widest text-xl mb-3">
								Accessories
							</h1>
							<nav class="list-none mb-10">
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										About Us
									</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										Terms & Conditions
									</a>
								</li>
								<li>
									<a class="text-gray-600 hover:text-gray-300 cursor-pointer">
										Privacy Policy
									</a>
								</li>
							</nav>
						</div>
					</div>
				</div>
				<div class="bg-gray-800">
					<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p class="text-gray-500 text-sm text-center sm:text-left">
							© 2020 Reach<span className="text-red-600">N</span>Buy
							<a
								href="https://twitter.com/knyttneve"
								rel="noopener noreferrer"
								class="text-gray-600 ml-1"
								target="_blank"
							></a>
						</p>
						<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<a class="text-gray-500 cursor-pointer">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>

							<a class="ml-3 text-gray-500 cursor-pointer">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
						</span>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
