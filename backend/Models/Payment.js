const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    cardName: {
        type: String,
        required: true,
        minlength: 2
    },
    cardNumber: {
        type: Number,
        required: true,
        minlength: 16,
        maxlength: 16

    },
    cardExpMonth: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    cardExpYear: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    cardCVC: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 3
    }
});

module.exports = mongoose.model("Payments", paymentSchema);