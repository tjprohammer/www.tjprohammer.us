import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { PaymentElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StyledButton } from '../../pages/home/Home';
import {url} from "../../redux/api"


export const PayButton = ({cartItems}) => {

const handleCheckout = () => {
    axios.post(`${url}/create-checkout-session`, {
        cartItems
    })
    .then((response) => {
        if (response.data.url) {
            window.location.href = response.data.url;
        }
    })
    .catch((err) => console.log(err.message));
}

    return <StyledButton onClick={() => handleCheckout()}> Pay</StyledButton>;
};

