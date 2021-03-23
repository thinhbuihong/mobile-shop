import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailReducer, productsReducer } from './reducers/productsReducers';
import { userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducers';

const reducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  // userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

const initialState = {
  cart: { cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] },
  userLogin: { userInfo: JSON.parse(localStorage.getItem('userInfo')) || null },
}

const middleware = [thunk];
const store = createStore(reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;