var mongoose = require('mongoose');


const addOnSchema = new mongoose.Schema({
    addOn: {
        type: String
    },
    price: {
        type: Number
    }
})

const amountAndPriceSchema = new mongoose.Schema({
    amount: {
        type: String
    },
    price: {
        type: Number
    }
})

const dishSchema = new mongoose.Schema ({
    name: {
        type: String
    },
    description: {
        type: String
    },
    amountAndPrice: [amountAndPriceSchema],
    addOns: [addOnSchema],
    category: {
        type: String,
        enum: ['Soup', 'Salad', 'Sandwich'],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model(
    'Dish',
    dishSchema
);