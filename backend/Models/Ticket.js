const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    surname: {
        type: String,
        required: true,
        minlength: 2

    },
    movieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies",
        required: true
    },
    dayID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required: true
    },
    timeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required: true
    },
    noOfTickets: {
        noOfAdult: {
            type: Number,
            required: true,
            default: 0
        },
        noOfChild: {
            type: Number,
            required: true,
            default: 0
        },
        noOfConcession: {
            type: Number,
            required: true,
            default: 0
        }
    },
    paymentID: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model("Tickets", ticketSchema);