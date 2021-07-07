const express = require('express');
const router = express.Router();

const Payment = require('../Models/Payment');

//get all prices
router.get('/payment', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(201)
            .send(payments);
    }
    catch {
        res.status(404)
            .send({ error: `No payment cards available` });
    }
});

//create price
router.post('/payment', async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save(prices);
        res.status(201)
            .send(payment);
    } catch {
        res.status(404)
            .send({ error: `The request could not be completed` })
    }
});

//update price
router.put('/payment', async (req, res) => {
    try {
        const payment = await Ticket.find();
        payment = new Price(req.body);
        await payment.save();
        res.status(201)
            .send(payment);
    } catch {
        res.status(404)
            .send({ error: `The payment method could not be updated` })
    }
});

//delete price
router.delete('/payment/:id', async (req, res) => {
    try {
        const payment = Payment.findById(request.params.id);
        await payment.deleteOne();
        res.status(201)
            .send(payment);
    } catch {
        res.status(404)
            .send({ error: `The payment method could not be removed` })
    }
});

module.exports = router;