const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    adult: {
        type: Number,
        minlength: 1,
    },
    child: {
        type: Number,
        minlength: 1,
    },
    senior: {
        type: Number,
        minlength: 1,
    }
});

module.exports = mongoose.model("Prices", priceSchema);