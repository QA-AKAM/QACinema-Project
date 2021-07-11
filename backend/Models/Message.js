const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 2
    },
    topic: {
        type: String,
        required: true,
        minlength: 2

    },
    message: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 400
    },
    readStatus: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model("Messages", messageSchema);