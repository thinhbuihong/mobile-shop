import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = {
  cartItems: []
}, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      if (!state.cartItems) {
        return { cartItems: [{ ...item }] };
      }

      const existItem = state.cartItems.find(x => x?.productId === item.productId);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => { if (x.productId === item.productId) x.quantity += 1 })
        }
      } else {
        return {
          ...state, cartItems: [...state.cartItems, { ...item, quantity: 1 }]
        }
      }

    default:
      return { ...state };
  }
}