const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    adult: {
        type: Number,
        minlength: 1,
        max: 7,
        required: true,
        default: 0
    },
    child: {
        type: Number,
        minlength: 1,
        max: 7,
        required: true,
        default: 0
    },
    senior: {
        type: Number,
        minlength: 1,
        max: 7,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model("Prices", priceSchema);