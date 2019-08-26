var mongoose = require('mongoose');

const lineItemsSchema = new mongoose.Schema ({
    dish: {
        type: String
    },
    quanitity: {
        type: Number,
        default: 1
    }
})

const orderSchema = new mongoose.Schema ({
    lineItems: [lineItemsSchema],
    totalPrice: {
        type: Number
    },
    paid: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})


module.exports = mongoose.model(
    'Order',
    orderSchema
);