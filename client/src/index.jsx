import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { Provider } from 'react-redux';
import  store, { persistor} from './redux/store';
import ProductProvider from './components/context/ProductContext';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <BrowserRouter>
        <ProductProvider>
        
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ScrollToTop />
                <App />
                </PersistGate>
            </Provider>
        </ProductProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
