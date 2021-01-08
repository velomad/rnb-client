import { assign } from "lodash";
import React, { useState } from "react";
import { history } from "../../utils";
import { register, checkMobileNumber } from "../../store/actions";
import { connect } from "react-redux";

const RegisterPage = (props) => {
  const [gender, setGender] = useState({});
  const [state, setState] = React.useState({
    name: "",
    mobileNumber: "",
    email: "",
  });
  const [submited, setSubmited] = useState(false);

  const handleGender = (val) => {
    setGender({ gender: val });
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const checkMobileNumber = (e) => {
    props.checkMobileNumber(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    console.log(Object.keys(gender));
    console.log(Object.keys(gender).length);
    if (Object.keys(gender).length > 0 && !props.exists) {
      const data = Object.assign(gender, state);
      props.register(data);
    }
  };

  return (
    <div class="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div class="font-medium self-center text-xl sm:text-xl capitalize text-gray-600">
          Register
        </div>

        <div class="relative mt-10 h-px bg-gray-300">
          <div class="absolute left-0 top-0 flex justify-center w-full -mt-2"></div>
        </div>
        <div class="mt-10">
          <form onSubmit={handleRegisterSubmit}>
            <div class="flex flex-col mb-6">
              <label
                htmlFor="email"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Name :
              </label>
              <div class="relative">
                <input
                  id="name"
                  autoComplete="off"
                  required
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  class="text-sm sm:text-base placeholder-gray-500 px-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="eg - John"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                htmlFor="email"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Mobile Number
              </label>
              <div class="relative">
                <input
                  onChange={handleChange}
                  value={state.mobileNumber}
                  id="numbers"
                  type="number"
                  autoComplete="off"
                  onBlur={checkMobileNumber}
                  required
                  name="mobileNumber"
                  class="text-sm sm:text-base placeholder-gray-500 px-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="eg : +91 547 96 525 41"
                />
              </div>

              {props.exists === true && (
                <div className="pt-2 text-center text-red-600 capitalize">
                  mobile number already exists
                </div>
              )}
            </div>
            <div class="flex flex-col mb-6">
              <label
                htmlFor="email"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>

                <input
                  onChange={handleChange}
                  value={state.email}
                  id="email"
                  autoComplete="on"
                  required
                  type="email"
                  name="email"
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>

            <div className="flex justify-between py-6 px-6">
              <div
                className={`flex items-center space-x-2 ${
                  gender.gender === "male" &&
                  "bg-gray-800 p-3 rounded-lg transition duration-500"
                } `}
                onClick={() => handleGender("male")}
              >
                <div>
                  <img src="/static/images/boy.svg" width="40px" />
                </div>
                <div className={`${gender.gender === "male" && "text-white"}`}>
                  Male
                </div>
              </div>

              <div
                className={`flex items-center space-x-2 ${
                  gender.gender === "female" &&
                  "bg-gray-800 p-3 rounded-lg transition duration-500"
                } `}
                onClick={() => handleGender("female")}
              >
                <div>
                  <img src="/static/images/female.svg" width="40px" />
                </div>
                <div
                  className={`${gender.gender === "female" && "text-white"}`}
                >
                  Female
                </div>
              </div>
            </div>

            {Object.keys(gender).length < 1 && submited === true ? (
              <div className="text-center py-4 text-red-600 capitalize">
                Gender selection is mandatory
              </div>
            ) : null}

            <div class="flex w-full">
              <button
                type="submit"
                class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-gray-800 hover:bg-gray-900 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span class="mr-2 uppercase">Register</span>
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div
          class="flex justify-center items-center mt-6"
          onClick={() => history.push("/auth")}
        >
          <span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </span>
          <span class="ml-2 text-sm text-blue-600">Login</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authState }) => ({
  status: authState.registerStatus,
  exists: authState.userExists,
});

export default connect(mapStateToProps, { register, checkMobileNumber })(
  RegisterPage
);
