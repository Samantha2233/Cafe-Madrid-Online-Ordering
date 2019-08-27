var mongoose = require('mongoose');


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
    picture: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number,
        match: /^\d{3}-\d{3}-\d{4}$/
    },
    orders : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model(
    'Customer',
    customerSchema
);