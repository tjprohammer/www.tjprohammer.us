import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.cart.find(
                (product) => product._id === action.payload._id && product.material.material_type === action.payload.material.material_type && product.size.size === action.payload.size.size
            );

            if (productInCart) {
                productInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            return state;
        },
        incrementQuantity: (state, action) => {
            const product = state.cart.find(
                (product) => product._id === action.payload 
            );

            product.quantity++;
        },
        decrementQuantity: (state, action) => {
            const product = state.cart.find(
                (product) => product._id === action.payload
            );
            if (product.quantity === 1) {
                product.quantity = 1;
            } else {
                product.quantity--;
            }
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(product => product._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cart = [];
            toast.error('Cart cleared', { position: 'bottom-right' });
        }
    }
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeProduct, clearCart } = cartSlice.actions;
export const cartSelector = (state) => state.cartAction;
