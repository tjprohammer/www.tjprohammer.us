import { useState } from 'react';

const useProduct = () => {
    const [selectedProduct, setSelectedProduct] = useState({});

    const handleProduct = (product = {}) => {
        setSelectedProduct(!selectedProduct);
        if (product) {
            setSelectedProduct(product);
        }
    };
    return { selectedProduct, handleProduct };
};

export default useProduct;
