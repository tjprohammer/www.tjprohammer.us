import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import styled, { keyframes } from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';
import { ColumnImg } from '../../pages/gallery/StylesGallery';

export const Modal = () => {
    const { modalContent, handleModal, openModal } = useContext(ModalContext);

    if (openModal) {
        return ReactDOM.createPortal(
            <Overlay>
                <Background>
                    <ModalContainer>
                        <ButtonX size={50} onClick={() => handleModal()} style={{ cursor: 'pointer' }} />
                        <br></br>

                            <div >
                                <h1 >{modalContent}</h1>
                                <br></br>
                                <ColumnImg ></ColumnImg>
                                <Button> Material</Button>
                                <Button>Size</Button>
                                <Button>Price</Button>
                                <Button>Add to Cart</Button>
                            </div>

                    </ModalContainer>
                </Background>
            </Overlay>,
            document.getElementById('modal-root')
        );
    } else return null;
};

const fadeIn = keyframes`from { opacity: 0; }`;

const Container = styled.div`
    position: relative;
    z-index: 0;
`;

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
const ModalContainer = styled.section`
    background-color: yellow;
    width: (min-content: 90%, 75.5rem);
    height: (min-content: 90%, 80rem);
    border-radius: 5px;
    padding: 1.5rem;
`;
const ButtonX = styled(AiOutlineCloseCircle)`
    color: #999;
    position: relative;
    padding: 0.7em;
    width: 190%;
    display: flex;
    z-index: 1;
`;
