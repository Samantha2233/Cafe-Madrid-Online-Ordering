var mongoose = require('mongoose');


const dishAddOnSchema = new mongoose.Schema({
    dishAddOn: {
        type: String,
        price: Number
    }
})

const dishAmountAndPriceSchema = new mongoose.Schema({
    dishAmount: {
        type: String
    },
    dishPrice: {
        type: Number
    }
})

const dishSchema = new mongoose.Schema ({
    dishName: {
        type: String
    },
    dishDescription: {
        type: String
    },
    dishAmountAndPrice: [dishAmountAndPriceSchema],
    dishAddOn: [dishAddOnSchema],
    dishType: {
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