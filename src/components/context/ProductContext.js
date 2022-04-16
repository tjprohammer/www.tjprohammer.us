//this will be a product context
// should have an array of product?
//should go in the Product compoenent?
//or should be in CoastalLandscapes compoenent?

import { createContext, useState, useContext } from 'react';
import { Modal } from 'reactstrap';
import { allProducts, coastalProducts, dryDesertsProducts, highAlpineProducts, lushRainforestsProducts, starGazingProducts, outDoorPortraits } from '../product/productData';

const ProductContext = createContext();

const ProductProvider = ({children }) => {
    const [products, setProducts ] = useState(allProducts)
    const [currentProduct, setCurrentProduct] = useState();
    const [coastsProducts] = useState(coastalProducts);
    const [desertsProducts] = useState(dryDesertsProducts);
    const [rainforestsProducts] = useState(lushRainforestsProducts);
    const [starProducts] = useState(starGazingProducts);
    const [mountainProducts] = useState(highAlpineProducts);
    const [portraits] = useState(outDoorPortraits)
    
    const handleProduct = ({product = {
        title: products.title,
        src: products.src,
        description: products.description,
        material: products.material,
        size: products.size,
        price: products.price
    }}) => {
        setProducts(product);
        if(product){
            setProducts(product);
        }
    }

    return (
    <ProductContext.Provider 
    value={{ products, currentProduct, setCurrentProduct, handleProduct, coastsProducts, desertsProducts, rainforestsProducts, starProducts, mountainProducts,portraits }}>
    {children}
    
    </ProductContext.Provider>)
};

export const ProductState = () => {
    return useContext(ProductContext);
};

export default ProductProvider;
