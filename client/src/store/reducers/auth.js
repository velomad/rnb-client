import {
  REGISTER_LOAD,
  REGISTER_FETCH,
  USER_EXISTS_CHECK_FETCH,
  USER_EXISTS_CHECK_LOAD,
} from "../types";

const initialState = {
  registerIsLoading: false,
  registerStatus: "",
  userExists: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_LOAD:
      return {
        ...state,
        registerIsLoading: true,
      };
    case REGISTER_FETCH:
      return {
        ...state,
        registerIsLoading: false,
        registerStatus: payload,
      };
    case USER_EXISTS_CHECK_FETCH:
      let respVal;
      if (payload == 1) {
        respVal = true;
      } else {
        respVal = false;
      }
      return {
        ...state,
        userExists: respVal,
      };
    default:
      return state;
  }
};

export default authReducer;
