import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer } from './reducers/orderReducers';
import { productDetailReducer, productsReducer } from './reducers/productsReducers';
import { userListReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducers';

const reducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  usersList: userListReducer,
})

const initialState = {
  cart: {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    shippingAddress: JSON.parse(localStorage.getItem('shippingAddress')) || {
      address: '',
      city: '',
      postalCode: '',
      country: '',
    }
  },
  userLogin: { userInfo: JSON.parse(localStorage.getItem('userInfo')) || null },
}

const middleware = [thunk];
const store = createStore(reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;