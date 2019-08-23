var mongoose = require('mongoose');

const customerSchema = new mongoose.Schema ({
    customerId: {
        type: Number
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        match: /^\d{3}-\d{3}-\d{4}$/,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model(
    'Customer',
    customerSchema
);