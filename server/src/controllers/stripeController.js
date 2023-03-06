const Stripe = require('stripe');
require('dotenv').config();
const express = require('express');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const calculatePaymentAmount = async (items) => {
    const productList = await products.list();
    // Look up sku for the item so we can get the current price.
    const skus = products.data.reduce((a, product) => [...a, ...product.skus.data], []);
    const total = items.reduce((a, item) => {
        const sku = skus.filter((sku) => sku.id === item.parent)[0];
        return a + sku.price * item.quantity;
    }, 0);
    return total;
};

const stripeCheckoutController = {
    createPaymentIntent: async (req, res) => {
        const { items } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculatePaymentAmount(items),
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true
            }
        });
        res.send({
            clientSecret: paymentIntent.client_secret
        });
    }
};

module.exports = stripeCheckoutController;
