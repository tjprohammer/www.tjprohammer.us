require('dotenv').config();

const express = require('express');
const Stripe = require('stripe');
const { Order } = require('../models/Orders');

require('dotenv').config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                    images: [item.image],
                    metadata: {
                        material: JSON.stringify(item.material.material_type),
                        size: JSON.stringify(item.size)
                    }
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        };
    });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          //Delivers between 6-14 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 6,
            },
            maximum: {
              unit: 'business_day',
              value: 14 ,
            },
          }
        }
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          //Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          }
        }
      },
    ],
        line_items: items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`
    });

    // res.redirect(303, session.url);
    res.send({ url: session.url });
});

module.exports = router;
