import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer } from './reducers/orderReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';


const userInfo = Cookie.getJSON("userInfo") || null;

const cartItems = Cookie.getJSON("cartItems") || [];



const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignin: { userInfo } };
const reducer = combineReducers({
   productList : productListReducer,
   productDetails:productDetailsReducer,
   cart: cartReducer,

   userSignin: userSigninReducer,
   userRegister: userRegisterReducer,
   productSave: productSaveReducer,
  
   productDelete: productDeleteReducer,
   orderCreate: orderCreateReducer,
   orderDetails: orderDetailsReducer,
   orderPay: orderPayReducer,

   userUpdate: userUpdateReducer,
   myOrderList: myOrderListReducer,
   orderList: orderListReducer,
   orderDelete: orderDeleteReducer
})
const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhance(applyMiddleware(thunk)));
export default store;