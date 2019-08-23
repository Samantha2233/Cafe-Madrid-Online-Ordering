var mongoose = require('mongoose');

const orderSchema = new mongoose.Schema ({
    orderId: {
        type: Number
    },
    orderContent: {
        type: Array
    },
    totalPrice: {
        type: Number
    }
},{
    timestamps: true
})

const customerSchema = new mongoose.Schema ({
    googleId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        match: /^\d{3}-\d{3}-\d{4}$/
    },
    order : [orderSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model(
    'Customer',
    customerSchema
);