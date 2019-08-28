var mongoose = require('mongoose');

const lineItemsSchema = new mongoose.Schema ([{
    dish: {
        dishId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dish'
        }
    },
    quanitity: {
        type: Number,
        default: 1
    }
}])

const orderSchema = new mongoose.Schema ({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
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