var mongoose = require('mongoose');

const dishSchema = new mongoose.Schema ({
    dishName: {
        type: String
    },
    dishDescription: {
        type: String
    },
    dishPrice:
    {
        type: number
    },
    dishType: {
        type: String,
        enum: ['Soup', 'Salad', 'Sandwich'],
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model(
    'Dish',
    dishSchema
);