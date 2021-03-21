import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailReducer, productsReducer } from './reducers/productsReducer';

const reducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
})
const initialState = {

}
const middleware = [thunk];
const store = createStore(reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;