import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL
} from '../constants/productConstants'

export const productsReducer = (state = {
  products: [],
  loading: false, error: null
}, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { loading: true };
    case PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
}

export const productDetailReducer = (state = {
  product: { reviews: [] },
  loading: false, error: null
}, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
}