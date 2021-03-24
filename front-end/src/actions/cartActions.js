import { CART_ADD_ITEM, CART_CLEAR, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants';

export const addToCart = (product) => {
  return ({
    type: CART_ADD_ITEM,
    payload: {
      productId: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
    }
  })
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
}

export const clearCart = () => {
  return { type: CART_CLEAR }
}

export const removeItemInCart = (id) => {
  return { type: CART_REMOVE_ITEM, payload: id }
}