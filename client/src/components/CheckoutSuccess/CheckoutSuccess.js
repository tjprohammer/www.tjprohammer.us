import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../../pages/home/Home';
import { clearCart, getTotals } from '../../redux/cart/CartSlice';

const CheckoutSuccess = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(getTotals());
    // }, [cart, dispatch]);

    return (
        <Container>
            <h2>Checkout Successful</h2>
            <p style={{ color: '#888' }}>Your order might take some time to process.</p>
            <p style={{ color: '#888' }}>
                Thank You!
            </p>
            <StyledButton onClick={() => navigate('/gallery')}>Back To Gallery</StyledButton>
        </Container>
    );
};

export default CheckoutSuccess;

const Container = styled.div`
    min-height: 80vh;
    max-width: 800px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin-bottom: 0.5rem;
        color: teal;
    }
`;
