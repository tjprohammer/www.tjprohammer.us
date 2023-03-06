const { Order } = require('../models/Orders');

const ordersController = {
    createOrder: async (req, res) => {
        const newOrder = new Order(req.body);
        try {
            const saveOrder = await newOrder.save();
            res.status(200).send(saveOrder);
        } catch (error) {
            res.status(500).send({ message: 'Failed to create order' });
        }
    },
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.find();
            res.status(200).send(orders);
        } catch (error) {
            res.status(500).send({ message: ' Failed to get orders' });
        }
    }
};
module.exports = ordersController;
