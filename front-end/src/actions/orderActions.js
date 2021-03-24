import axios from "axios";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch, state) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + state().userLogin.userInfo.token,
      }
    };

    const { data } = await axios.post('/api/orders', order, config);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response.data.message || error.message,
    })
  }
}