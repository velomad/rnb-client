import React from 'react';
import { SearchBar } from '../../../../../components';

const Primary = () => {
    const [open, setOpen] = React.useState(false);

	const showMenu = () => {
		open ? setOpen(false) : setOpen(true);
	};
    return (
        <React.Fragment>
            <nav className="container mx-auto px-6 py-3">
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

                            <div className="mx-12 hidden md:block">
                                <div className="relative text-gray-600">
                                    <SearchBar />
                                    {/* <input
                                        type="search"
                                        name="serch"
                                        placeholder="Search"
                                        className="bg-white h-10 w-full px-5 pr-64 rounded-full text-sm focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-0 top-0 mt-3 mr-4"
                                    >
                                        <svg
                                            className="h-4 w-4 fill-current"
                                            version="1.1"
                                            id="Capa_1"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 56.966 56.966"
                                            style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                            width="512px"
                                            height="512px"
                                        >
                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </button> */}
                                </div>
                            </div>
                        </div>

                        <div className="flex md:hidden" onClick={() => showMenu()}>
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

                    <div
                        className={
                            open
                                ? "md:flex items-center block"
                                : "md:flex items-center hidden"
                        }
                        style={{ zIndex: "9999" }}
                    >
                        <ul className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                            <li className="hover:text-white">
                                <a
                                    href="#"
                                    className="relative block text-sm text-white leading-5 py-2 mx-6 md:my-0 duration-2000 ease-out hover:font-bold"
                                >
                                    Home
								</a>
                            </li>
                            <li className="hoverable  hover:text-white">
                                <a
                                    href="#"
                                    className="relative block text-sm text-white py-2 leading-5 mx-6 md:my-0"
                                >
                                    Men
								</a>
                                <div
                                    className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl"
                                    style={{ backgroundColor: "white" }}
                                >
                                    <div className="container mt-40 lg:mt-20 md:mt-20 mx-auto w-full flex flex-wrap justify-between mx-2">
                                        <div className="w-full text-gray-900 mb-8">
                                            <h2 className="font-bold text-2xl">
                                                Main Hero Message for the menu section
											</h2>
                                            <p>
                                                Sub-hero message, not too long and not too short. Make
                                                it just right!
											</p>
                                        </div>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 1
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                Quarterly sales are at an all-time low create spaces to
                                                explore the accountable talk and blind vampires.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-gray-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 2
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                Prioritize these line items game-plan draw a line in the
                                                sand come up with something buzzworthy UX upstream
                                                selling.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-gray-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 3
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                This proposal is a win-win situation which will cause a
                                                stellar paradigm shift, let's touch base off-line before
                                                we fire the new ux experience.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-gray-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 4
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                This is a no-brainer to wash your face, or we need to
                                                future-proof this high performance keywords granularity.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="hoverable  hover:text-white">
                                <a
                                    href="#"
                                    className="relative block text-sm text-white py-2 leading-5 mx-6 md:my-0"
                                >
                                    Women
								</a>
                                <div
                                    className="p-6 mega-menu  mb-16 sm:mb-0 shadow-xl"
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    <div className="container mt-40 lg:mt-20 md:mt-20  mx-auto w-full flex flex-wrap justify-between mx-2">
                                        <div className="w-full text-gray-900 mb-8">
                                            <h2 className="font-bold text-2xl">
                                                Main Hero Message for the menu section
											</h2>
                                            <p>
                                                Sub-hero message, not too long and not too short. Make
                                                it just right!
											</p>
                                        </div>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 1
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                Quarterly sales are at an all-time low create spaces to
                                                explore the accountable talk and blind vampires.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-gray-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 2
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                Prioritize these line items game-plan draw a line in the
                                                sand come up with something buzzworthy UX upstream
                                                selling.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-gray-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 3
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                This proposal is a win-win situation which will cause a
                                                stellar paradigm shift, let's touch base off-line before
                                                we fire the new ux experience.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                            <div className="flex items-center">
                                                <svg
                                                    className="h-8 mb-3 mr-3 fill-current text-gray-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                                </svg>
                                                <h3 className="font-bold text-xl text-gray-600 text-bold mb-2">
                                                    Heading 4
												</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                This is a no-brainer to wash your face, or we need to
                                                future-proof this high performance keywords granularity.
											</p>
                                            <div className="flex items-center py-3">
                                                <svg
                                                    className="h-6 pr-3 fill-current text-blue-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                                </svg>
                                                <a
                                                    href="#"
                                                    className="text-gray-600 bold border-b-2 border-blue-300 hover:text-blue-300"
                                                >
                                                    Find out more...
												</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="flex items-center py-2 -mx-1 md:mx-0"></div>

                        <div className="mt-3 md:hidden">
                            <div className="pt-2 relative mx-auto text-gray-600">
                                <input
                                    type="search"
                                    name="serch"
                                    placeholder="Search"
                                    className="bg-white h-10 w-full px-5 pr-40 rounded-full text-sm focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 mt-5 mr-4"
                                >
                                    <svg
                                        className="h-4 w-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 56.966 56.966"
                                        style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                        width="512px"
                                        height="512px"
                                    >
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3 py-0 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden">
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Myntra
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Flipkart
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Snapdeal
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        fynd
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Ajio
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Bewakoof
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Vue
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Tatacliq
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Myntra
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Flipkart
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Snapdeal
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        fynd
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Ajio
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Bewakoof
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Vue
					</a>
                    <a
                        className="text-sm text-white leading-5 hover:text-blue-600 hover:underline mx-6 md:my-0"
                        href="#"
                    >
                        Tatacliq
					</a>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Primary;