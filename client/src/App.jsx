import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import { NavbarMenu } from './components/navigation';
import About from './pages/aboutTJ/About';
import React, { lazy, Suspense } from 'react';

import Footer from './components/footer/Footer';
import ProductDetails from './components/product/ProductDetails';
import { ToastContainer } from 'react-toastify';
import EmptyCart from './components/EmptyCart/EmptyCart';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import CheckoutSuccess from './components/CheckoutSuccess/CheckoutSuccess';
import { Spinner } from 'reactstrap';
import Contact from './pages/contact/Contact';
// import Calendars from './pages/calendars/Calendars';

const OutdoorPortraits = lazy(() => import('./pages/aboutTJ/OutdoorPortraits'));
const GalleryCategory = lazy(() => import('./pages/gallery/index'));
const LushRainforests = lazy(() => import('./pages/gallery/LushRainforests'));
const StarGazing = lazy(() => import('./pages/gallery/StarGazing'));
const DryDeserts = lazy(() => import('./pages/gallery/DryDeserts'));
const TheHighAlpine = lazy(() => import('./pages/gallery/TheHighAlpine'));
const CoastalShoreline = lazy(() => import('./pages/gallery/CoastalShoreline'));
const Cart = lazy(() => import('./pages/cart/Cart'));

const renderLoader = () => <Spinner />;

function App() {
    return (
        <>
            <NavbarMenu />
            <Footer />
            <ScrollToTop />
            <ToastContainer position="bottom-right" />
            <Suspense fallback={renderLoader()}>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/outdoorportraits" element={<OutdoorPortraits />} />

                    <Route path="/gallery" element={<GalleryCategory />} />

                    {/* <Route path="/products/calendars" element={<Calendars />} />
                <Route path="/products/:id" element={<ProductDetails />} /> */}

                    <Route path="/products/coastalshoreline" element={<CoastalShoreline />} />
                    <Route path="/products/:id" element={<ProductDetails />} />

                    <Route path="/products/lushrainforests" element={<LushRainforests />} />
                    <Route path="/products/:id" element={<ProductDetails />} />

                    <Route path="/products/stargazing" element={<StarGazing />} />
                    <Route path="/products/:id" element={<ProductDetails />} />

                    <Route path="/products/drydeserts" element={<DryDeserts />} />
                    <Route path="/products/:id" element={<ProductDetails />} />

                    <Route path="/products/thehighalpine" element={<TheHighAlpine />} />
                    <Route path="/products/id" element={<ProductDetails />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout-success" element={<CheckoutSuccess />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
