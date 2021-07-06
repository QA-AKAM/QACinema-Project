const express = require('express');
const router = express.Router();

const Ticket = require('../Models/Ticket');
const Payment = require('../Models/Payment');

//get all bookings
router.get('/booking', async (request, response) => {
    try {
        const bookings = await Ticket.find()
            .populate({
                path: 'movieID',
                select: 'title imageURL dateTime'
            });
        response.send(bookings);
    } catch {
        response.status(404);
        response.send({ error: 'no bookings' })
    }
});

//get bookings by id
router.get('/booking/:id', async (request, response) => {
    try {
        const booking = await Ticket.findById(request.params.id)
            .populate({
                path: 'movieID',
                select: 'title imageURL dateTime'
            });
        response.send(booking);
    } catch {
        response.status(404);
        response.send({ error: 'booking does not exist' })
    }
});

//get bookings by firstName
router.get('/bookings/name/:firstname', async (request, response) => {
    try {
        const movie = await Ticket.find({ firstName: { $eq: request.params.firstname } })
            .populate({
                path: 'movieID',
                select: 'title imageURL dateTime'
            });
        response.send(movie);
    } catch {
        response.status(404);
        response.send({ error: 'no bookings' })
    }
});


//create movie using form
router.post('/booking', async (request, response) => {
    try {
        const payment = new Payment(request.body.payment);
        await payment.save();
        const paymentId = (await Payment.find().sort({ _id: -1 }).limit(1)).map(key => key._id)[0].toString();
        const ticket = new Ticket(request.body);
        ticket.paymentID = paymentId;
        await ticket.save();
        response.send(ticket);
    } catch {
        response.status(404);
        response.send({ error: 'the could not be completed' })
    }
});

//update movie
router.put('/booking/:id', async (request, response) => {
    try {
        const ticket = await Ticket.findById(request.params.id);
        ticket.firstName = request.body.firstName;
        ticket.surname = request.body.surname;
        ticket.noOfTickets = request.body.noOfTickets;
        ticket.dayID = request.body.dayID;
        ticket.timeID = request.body.timeID;
        await ticket.save();
        response.send(ticket);
    } catch {
        response.status(404);
        response.send({ error: 'the booking could not be updated' })
    }
});

//delete movie
router.delete('/booking/:id', async (request, response) => {
    try {
        const ticket = await Ticket.findById(request.params.id);
        const payment = await Payment.findById(ticket.paymentID);
        await payment.deleteOne();
        await ticket.deleteOne();
        response.send(ticket);
    } catch {
        response.status(404);
        response.send({ error: 'the booking could not be deleted' })
    }
});

module.exports = router;