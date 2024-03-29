import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducers,productDetailsReducers} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { orderCreateReducer,orderDetailsReducer } from './reducers/oderReducers'

import {userLoginReducer ,userRegisterReducer ,userDetailsReducer ,userUpdateProfileReducer} from './reducers/userReducers'

const reducer =combineReducers({
    productList :productListReducers,
    productDetails :productDetailsReducers,
    cart : cartReducer,
    userLogin: userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails :userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails:orderDetailsReducer,
})
const cartItemsFormStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFormStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')):null


const shippingAddressFormStorage = localStorage.getItem('shippingAddress') ?
JSON.parse(localStorage.getItem('shippingAddress')):{}

const initialState={
    cart:{
        cartItems:cartItemsFormStorage,
        shippingAddress:shippingAddressFormStorage,
    },
    userLoginn:{userInfo:userInfoFormStorage},
}
const middleware=[thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
