import React, { useState } from "react";
import { history } from "../../utils";

const RegisterPage = () => {
    const [gender, setGender] = useState("")

    const handleGender = (val) => {
        setGender(val)
    }

    return (

        <div class="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
            <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div class="font-medium self-center text-xl sm:text-xl capitalize text-gray-600">Register To Your Account</div>

                <div class="relative mt-10 h-px bg-gray-300">
                    <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    </div>
                </div>
                <div class="mt-10">
                    <form action="#">
                        <div class="flex flex-col mb-6">
                            <label htmlFor="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Name :</label>
                            <div class="relative">

                                <input id="name" type="text" name="email" class="text-sm sm:text-base placeholder-gray-500 px-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="eg - John" />
                            </div>
                        </div>
                        <div class="flex flex-col mb-6">
                            <label htmlFor="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Mobile Number</label>
                            <div class="relative">
                                <input id="numbers" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 px-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="eg : +91 547 96 525 41" />
                            </div>
                        </div>
                        <div class="flex flex-col mb-6">
                            <label htmlFor="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                            <div class="relative">
                                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input id="email" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                            </div>
                        </div>

                        <div className="flex justify-between py-6 px-6">
                            <div className={`flex items-center space-x-2 ${gender === "male" && "bg-gray-800 p-3 rounded-lg transition duration-500"} `}
                                onClick={() => handleGender("male")}
                            >
                                <div>
                                    <img src="/static/images/boy.svg" width="40px" />

                                </div>
                                <div className={`${gender === "male" && "text-white"}`}>
                                    Male
                                </div>

                            </div>

                            <div className={`flex items-center space-x-2 ${gender === "female" && "bg-gray-800 p-3 rounded-lg transition duration-500"} `}
                                onClick={() => handleGender("female")}

                            >
                                <div>
                                    <img src="/static/images/female.svg" width="40px" />

                                </div>
                                <div
                                    className={`${gender === "female" && "text-white"}`}
                                >
                                    Female
                                </div>

                            </div>

                        </div>

                        <div class="flex w-full">
                            <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-gray-800 hover:bg-gray-900 rounded py-2 w-full transition duration-150 ease-in">
                                <span class="mr-2 uppercase">Register</span>
                                <span>
                                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="flex justify-center items-center mt-6"
                    onClick={()=> history.push("/auth")}
                >
                    <span>
                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </span>
                    <span class="ml-2 text-sm text-blue-600">Login</span>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage