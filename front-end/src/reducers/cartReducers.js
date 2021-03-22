import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR } from "../constants/cartConstants";

export const cartReducer = (state = {
  cartItems: []
}, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      if (state.cartItems.length === 0) {
        return { ...state, cartItems: [{ ...item, quantity: 1 }] };
      }

      const existItem = state.cartItems.find(x => x?.productId === item.productId);

      if (existItem) {
        existItem.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return {
          ...state,
        }
      } else {
        const cartItems = [...state.cartItems, { ...item, quantity: 1 }];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        return {
          ...state, cartItems
        }
      }
    //clear cart
    case CART_CLEAR:
      localStorage.removeItem("cartItems");
      return { ...state, cartItems: [] };

    //remove item
    case CART_REMOVE_ITEM:
      const cartItems = state.cartItems.filter(x => x.productId !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cartItems }

    default:
      return { ...state };
  }
}