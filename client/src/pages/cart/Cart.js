import React, { useEffect, useState } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row } from 'reactstrap';
import BackButton from '../../components/BackButton/BackButton';
import { PayButton } from '../../components/Checkout/PayButton';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { cartSelector, clearCart } from '../../redux/cart/CartSlice';
import { Header } from '../gallery/StylesGallery';
import { TitleDescription } from '../home/StyleHome';
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch();
    const cartAction = useSelector(cartSelector);
    const { cart } = cartAction;
    const navigate = useNavigate();
    // console.log(cart);

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCartItems(cart);
    });


    useEffect(() => {
        if (cartItems.length > 0) {
            const totalCost = () => {
                let total = cartItems.reduce((prev, item) => {
                    return prev + item.price * item.quantity;
                }, 0);

                setTotal(total.toFixed(2));
            };
            totalCost();
        }
    }, [cartItems]);

    if (cart.length === 0) {
        return <EmptyCart />;
    }
console.log(cart)
    // console.log(cartItems?.map((product) => console.log(product)))
    // console.log(cartItems);

    return (
        <div style={{ marginTop: '12em',marginBottom: '7em' }}>
            <div style={{ alignItems: 'center' }}>
                <Header>Cart</Header>
                {cartItems && cart.length > 0 ? (
                    <>
                        {cartItems?.map((product, _id) => (
                            <>
                                <BackButton key={product} />
                                <CartItem
                                    key={product._id}
                                    _id={product._id}
                                    image={product.image}
                                    title={product.title}
                                    material={product.material.material_type}
                                    size={product.size.size}
                                    price={product.price}
                                    product={product}
                                    quantity={product.quantity}
                                    cartItems={cartItems}
                                />
                            </>
                        ))}
                    </>
                ) : (
                    <EmptyCart />
                )}

                <TitleDescription style={{fontSize: '2em', fontWeight: '700', color: 'teal' }} total={total}>
                    Total Price: $ {total}
                </TitleDescription>
                <Row style={{justifyContent: 'center', width: '100%', marginLeft: '.3em'}}>
                <PayButton cartItems={cartItems} />
                </Row>
            </div>
        </div>
    );
};

export default Cart;
