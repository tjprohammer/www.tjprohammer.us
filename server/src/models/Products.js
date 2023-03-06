const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    materials: [
        {
            material_type: {
                type: String,
                required: true
            },
            sizes: [
                {
                    size: {
                        type: String,
                        required: true
                    },
                    price: {
                        type: Number,
                        required: true
                    }
                }
            ]
        },
        { timestamps: true }
    ]
});

module.exports = mongoose.model('Products', productSchema);
