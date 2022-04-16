import React from 'react';

import styled, { keyframes } from 'styled-components';

import useModal from '../../hooks/modalHook/useModal';
import { Modal } from '../modal/Modal';


export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
    const { openModal, handleModal, modalContent } = useModal();

    // make sure re-render is triggered after initial
    // render so that modalRef exists

    // useEffect(() => {
    //     setContext(modalRef.current.value);
    //     setCurrentProduct(currentProduct);
    // }, []);

    console.log(modalContent);
    return (
        <ModalContext.Provider value={{ openModal, handleModal, modalContent }}>
            <Modal />
            {children}
        </ModalContext.Provider>
    );
};

const fadeIn = keyframes`from { opacity: 0; }`;
const Overlay = styled.div`
    animation: ${fadeIn} 200ms ease-out;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    align-content: center;
    justify-content: center;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
`;

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 12rem;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 20px;
    z-index: 1;
`;
