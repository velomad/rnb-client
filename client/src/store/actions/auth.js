import Axios from "axios";
import {
  REGISTER_LOAD,
  REGISTER_FETCH,
  USER_EXISTS_CHECK_LOAD,
  USER_EXISTS_CHECK_FETCH,
} from "../types";
import { history } from "../../utils";

export const register = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_LOAD });
  try {
    const response = await Axios.get(
      `https://cors-anywhere.herokuapp.com/http://reachnbuy.unitechitsolution.in/AndroidClass/register.php?mo_no=${data.mobileNumber}&name=${data.name}&email_id=${data.email}&gender=${data.gender}`
    );
    if (response.data.status === 1) {
      history.push("/wishlist");
    }
    localStorage.setItem("user", response.data.id);
    dispatch({ type: REGISTER_FETCH, payload: response.data.status });
  } catch (e) {
    console.log(e);
  }
};

export const checkMobileNumber = (number) => async (dispatch) => {
  dispatch({ type: USER_EXISTS_CHECK_LOAD });
  try {
    const response = await Axios.get(
      `https://cors-anywhere.herokuapp.com/http://reachnbuy.unitechitsolution.in/AndroidClass/check_mo_no.php?mo_no=${number}`
    );
    dispatch({ type: USER_EXISTS_CHECK_FETCH, payload: response.data.success });
  } catch (e) {
    console.log(e);
  }
};
