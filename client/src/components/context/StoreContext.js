import { createContext, useState, useContext, useEffect } from 'react';

const StoreContext = createContext();

const StoreProvider = ({children}) => {
    const [storeProducts, setStoreProducts] = useState() 

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://domain.us:5005/api/products/listAllCoastal', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            const items = await response.json();
            if (items && Array.isArray(items) && items.length) {
                setStoreProducts(items);
            }
        };
        getProducts();
    }, [100]);

    const handleStoreProduct = ({product = {
        id: storeProducts._id,
        title: storeProducts.title,
        description: storeProducts.description,
        src: storeProducts.src

    }}) => {
        setStoreProducts(product);
        if(product){
            setStoreProducts(storeProducts);
        }
    }

    // console.log(storeProducts)
    return <StoreContext.Provider value={{ storeProducts, handleStoreProduct }}>{children}</StoreContext.Provider>;
};

export const ProductState = () => {
    return useContext(StoreContext);
};
export default StoreProvider;