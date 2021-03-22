import { CART_ADD_ITEM, CART_CLEAR, CART_REMOVE_ITEM } from '../constants/cartConstants';

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

export const clearCart = () => {
  return { type: CART_CLEAR }
}

export const removeItemInCart = (id) => {
  return { type: CART_REMOVE_ITEM, payload: id }
}