//this will be a product context
// should have an array of product?
//should go in the Product compoenent?
//or should be in CoastalLandscapes compoenent?

import { createContext, useState, useContext } from 'react';
import { Modal } from 'reactstrap';
import { allProducts, outDoorPortraits } from '../product/ProductData';

const ProductContext = createContext();

const ProductProvider = ({children }) => {

    const [portraits] = useState(outDoorPortraits)
    
 

    return (
    <ProductContext.Provider 
    value={{ portraits }}>
    {children}
    
    </ProductContext.Provider>)
};

export const ProductState = () => {
    return useContext(ProductContext);
};

export default ProductProvider;
