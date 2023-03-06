import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ProductReducer, { productState } from './products/ProductSlice';
import {cartReducer} from './cart/CartSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    productsAction: productState,
    cartAction: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,

});

const persistor = persistStore(store);

export {persistor};
export default store
