import React from 'react';

const Secondary = () => {
    return (
        <React.Fragment>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-6">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 text-white ml-0 lg:mt-2 md:mt-2 sm:mt-2  mt-0">
                                <a
                                    href="#"
                                    className="lg:ml-4 md:ml-4 ml-0  px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                >
                                    India's Fastest Online Shopping Destination
								</a>
                            </div>
                            <div
                                className="hidden sm:block sm:ml-6"
                                style={{ margin: "0 auto" }}
                            >
                                <div className="flex">
                                    <a
                                        href="#"
                                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                    >
                                        Help Center
									</a>
                                    <a
                                        href="#"
                                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover: focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                    >
                                        Sale On ReachNBuy{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                    >
                                        Download App
									</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Secondary;