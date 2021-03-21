import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailReducer, productsReducer } from './reducers/productsReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
})
const initialState = {
  cart: { cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] }
}
const middleware = [thunk];
const store = createStore(reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;