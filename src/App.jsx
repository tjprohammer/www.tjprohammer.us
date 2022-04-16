import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import { NavbarMenu } from './components/navigation';
import About from './pages/aboutTJ/About';
import ReadMore from './pages/aboutTJ/ReadMore';
import ReadMoreTwo from './pages/aboutTJ/ReadMoreTwo';
import OutdoorPortraits from './pages/aboutTJ/OutdoorPortraits';
import GalleryCategory from './pages/gallery/index';
import LushRainforests from './pages/gallery/LushRainforests';
import StarGazing from './pages/gallery/StarGazing';
import DryDeserts from './pages/gallery/DryDeserts';
import TheHighAlpine from './pages/gallery/TheHighAlpine';
import CoastalShoreline from './pages/gallery/CoastalShoreline';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';

import CoastalProductPage from './pages/productpage/CoastalProductPage';
import DesertProductPage from './pages/productpage/DesertsProductPage';

import ForestProductPage from './pages/productpage/ForestsProductPage';
import AlpineProductPage from './pages/productpage/AlpineProductPage';
import StarProductPage from './pages/productpage/StarProductPage';

function App() {
    return (
        <>
            <NavbarMenu />
            <Footer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/readmore" element={<ReadMore />} />
                <Route path="/readmoretwo" element={<ReadMoreTwo />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                
               

                <Route path="/outdoorportraits" element={<OutdoorPortraits />} />

                <Route path="/gallery" element={<GalleryCategory />} />

                <Route path="/coastalshoreline" element={<CoastalShoreline />} />
                <Route path="/coastalshoreline/:coastalproductId" element={<CoastalProductPage />} />

                <Route path="/lushrainforests" element={<LushRainforests />} />
                <Route path="/lushrainforests/:lushrainforestsId" element={<ForestProductPage />} />

                <Route path="/stargazing" element={<StarGazing />} />
                <Route path="/stargazing/:stargazingId" element={<StarProductPage />} />

                <Route path="/drydeserts" element={<DryDeserts />} />
                <Route path="/drydeserts/:desertsProductId" element={<DesertProductPage />} />

                <Route path="/thehighalpine" element={<TheHighAlpine />} />
                <Route path="/thehighalpine/:thehighalpineId" element={<AlpineProductPage />} />

                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
