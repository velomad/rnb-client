import React from "react";
import { SearchBar } from "../../../../../../components";
import { DynamicContent } from "../Menu";
import { connect } from "react-redux";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { setSearchSlide } from "../../../../../../store/actions";
import { men, women } from "../Menu/DynamicContent/flipkartMenuData";
import { amazonmen, amazonwomen } from "../Menu/DynamicContent/amazonMenuData";
import { myntramen, myntrawomen } from "../Menu/DynamicContent/myntraMenuData";
import { ajiomen, ajiowomen } from "../Menu/DynamicContent/ajioMenuData";
import { tatacliqmen, tatacliqwomen } from "../Menu/DynamicContent/tatacliqMenuData";
import { bewakoofmen, bewakoofwomen } from "../Menu/DynamicContent/bewakoofMenuData";
import Skeleton from '@material-ui/lab/Skeleton';

const Primary = (props) => {

    return (
        <React.Fragment>
            <nav className="container mx-auto px-3 py-3 md:py-0 lg:py-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            
                                <Skeleton animation="wave" height={80} width="10rem" />
                            <div className="mx-64 hidden md:block">
                                <div className="relative text-gray-600">
                                    <Skeleton animation="wave" height={10} width="25rem" />
                                    <Skeleton animation="wave" height={10} width="22rem" />
                                </div>
                            </div>
                        </div>

                        <div className="flex md:hidden">
                            <SearchOutlinedIcon  className="text-white mx-2 px-1" fontSize="large" />
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
                </div>
                <div class="flex flex-row p-0 pb-2 overflow-auto w-0 min-w-full">
                    <div
                        class="text-sm text-center mr-8 cursor-pointer"
                    >
                        <div class="p-1 border-2 border-white rounded-full">
                            <div class="w-10 h-10 relative flex flex-shrink-0">
                                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </div>
                        </div>
                        <p className="text-black font-bold"></p>
                    </div>
                    <div
                        class="text-sm text-center mr-8 cursor-pointer"
                    >
                        <div class="p-1 border-2 border-white rounded-full">
                            <div class="hoverable w-10 h-10 relative flex flex-shrink-0">
                                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </div>
                        </div>
                        <p className="text-black font-bold"></p>
                    </div>
                    <div
                        class="text-sm text-center mr-8 cursor-pointer"
                    >
                        <div class="p-1 border-2 border-white rounded-full">
                            <div class="w-10 h-10 relative flex flex-shrink-0">
                                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </div>
                        </div>
                        <p className="text-black font-bold"></p>
                    </div>
                    <div
                        class="text-sm text-center mr-8 cursor-pointer"
                    >
                        <div class="p-1 border-2 border-white rounded-full">
                            <div class="w-10 h-10 relative flex flex-shrink-0">
                                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </div>
                        </div>
                        <p className="text-black font-bold"></p>
                    </div>
                    <div
                        class="text-sm text-center mr-8 cursor-pointer"
                    >
                        <div class="p-1 border-2 border-white rounded-full">
                            <div class="w-10 h-10 relative flex flex-shrink-0">
                                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </div>
                        </div>
                        <p className="text-black font-bold"></p>
                    </div>
                    <div
                        class="text-sm text-center mr-8 cursor-pointer"
                    >
                        <div class="p-1 border-2 border-white rounded-full">
                            <div class="w-10 h-10 relative flex flex-shrink-0">
                                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            </div>
                        </div>
                        <p className="text-black font-bold"></p>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default connect(null, { setSearchSlide })(Primary);
