import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async (query) => {
    try {
        const response = await axios.get(`https://domain.us:5005/api/products?limit=${query.page * 25}&${query.category}&${query.sort}&title[regex]=${query.search}`);
        return response.data;
    } catch (error) {
        console.log('error', error.response.data.msg, 'error');
    }
});

export const updateProducts = createAsyncThunk('products/updateProducts', async (products) => {
    return products;
});

//Categories
export const getCategories = createAsyncThunk('category/getCategories', async () => {
    try {
        const response = await axios.get(`https://domain.us:5005/api/category`);
        return response.data;
    } catch (error) {
        console.error('error', error.response.data.msg, 'error');
    }
});

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categories: [],
        cartItems: [],
        result: 0
    },
    reducers: {},
    extraReducers: {
        [getProducts.pending]: () => {
            console.log('pending...');
        },
        [getProducts.fulfilled]: (state, action) => {
            console.log('fulfilled...');
            state.products = action.payload.products;
            state.result = action.payload.result;
        },

        [updateProducts.fulfilled]: (state, action) => {
            console.log('fulfilled...');
            state.products = action.payload;
        },
        [getCategories.fulfilled]: (state, action) => {
            console.log('fulfilled...');
            state.categories = action.payload;
        },
        [getProducts.rejected]: () => {
            console.log('rejected...');
        }
    }
});

export const productState = productSlice.reducer;

export const productSelector = (state) => state.productsAction;
