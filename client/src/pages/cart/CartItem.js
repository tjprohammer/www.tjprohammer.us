import { incrementQuantity, decrementQuantity, removeProduct } from '../../redux/cart/CartSlice';
import { useDispatch } from 'react-redux';
import { ColumnImg } from '../gallery/StylesGallery';
import { CardBody, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { StyledButton } from '../home/Home';
import { toast } from 'react-toastify';

const CartItem = ({ _id, title, image, material, size, price, quantity }) => {
    const dispatch = useDispatch();

    // console.log(cartItems)

    return (
        <Container >
            <CartCard key={_id}>
                <ColumnImg src={image} style={{ width: '300px' }} />
                <CardBody>
                    <h2 style={{color: '#999'}}>{title}</h2>
                    <p style={{ fontSize: '.9em', color: '#888' }} />
                    <strong style={{color: '#888'}}>{material}</strong>
                    <br />
                    <strong style={{color: '#888'}}>{size}</strong>
                    <br />
                    <strong style={{color: '#888'}}>$ {price}</strong>
                    <p style={{ color: '#888' }}>
                        Quantity:
                        <strong style={{color: '#888'}}> {quantity}</strong>
                    </p>

                    <StyledButton onClick={() => dispatch(incrementQuantity(_id))}>+</StyledButton>
                    <StyledButton onClick={() => dispatch(decrementQuantity(_id))}>-</StyledButton>
                    <StyledButton
                        onClick={() => {
                            dispatch(removeProduct({_id:_id}));
                            toast.warning(`${title} is removed from cart`, {
                                position: 'bottom-right',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined
                            });
                        }}
                    >
                        Remove
                    </StyledButton>
                </CardBody>
            </CartCard>
        </Container>
    );
};

const CartCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0.2px 0.2px 1px #d3d3d3;
    margin-bottom: 30px;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    overflow: none;

    &:hover {
        transform: scale(1.005);
        transform: all 0.4s ease-in-out;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        padding: 30px 20px;
        gap: 20px;
        text-align: center;
    }
`;
export default CartItem;
