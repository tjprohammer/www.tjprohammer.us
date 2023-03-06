import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cart/CartSlice';

import productsReducer from './products/productReducers';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,

});

export default persistReducer(persistConfig, rootReducer);
