import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
//troverò anche l'estensione su Chrome dev che registrano le azioni
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers'

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    //cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
     initialState,
     composeEnhancer(applyMiddleware(thunk))     
);
//Redux
export default store; 