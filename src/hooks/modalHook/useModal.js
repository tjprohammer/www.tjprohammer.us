import { useEffect, useState } from 'react';
import { ProductState } from '../../components/context/ProductContext';

const useModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState();
    const { products,} = ProductState();

    console.log(products)
    useEffect(() => {
        setModalContent(modalContent);
        // setCurrentProduct(currentProduct);
    }, []);

    const handleModal = (context = false) => {
        // setModalContent(!products)
        setOpenModal(!openModal);
        if (context) {
            setModalContent(context);
        }
    };

    return {
        openModal,
        handleModal,
        setModalContent,
        modalContent
    };
};

export default useModal;
