import axios from 'axios';
import {
  PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS,
  PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_SUCCESS
} from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST })
    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAIL,
      payload: error.response.data.message || error.message
    })
  }
}

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST })
    const { data } = await axios.get('/api/products/' + id);

    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload: error.response.data.message || error.message
    })
  }
}