const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2
    },
    surname: {
        type: Number,
        required: true,
        minlength: 4

    },
    movieID: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    noOfTickets: [{
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
    }],
    payment: {
        type: String
    }
});

module.exports = mongoose.model("Tickets", ticketSchema);