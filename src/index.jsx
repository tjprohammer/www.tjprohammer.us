import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './components/context/ProductContext';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

ReactDOM.render(
    <BrowserRouter>
        <ProductProvider>
            <ScrollToTop />
            <App />
        </ProductProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
