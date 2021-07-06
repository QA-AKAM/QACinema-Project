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
    cardExpDate: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 5
    },
    cardCVC: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 3
    }
});

module.exports = mongoose.model("Payments", paymentSchema);