const express = require('express');
const router = express.Router();

const Price = require('../Models/Price');

//get all prices
router.get('/ticketPrice', async (req, res) => {
    try {
        const prices = await Price.find();
        res.status(201)
            .send(prices);
    }
    catch {
        res.status(404)
            .send({ error: `No prices available` });
    }
});

//create price
router.post('/ticketPrice', async (req, res) => {
    try {
        const prices = new Price(req.body);
        await prices.save(prices);
        res.status(201)
            .send(prices);
    } catch {
        res.status(404)
            .send({ error: `The request could not be completed` })
    }
});

//update price
router.put('/ticketPrice', async (req, res) => {
    try {
        const prices = await Ticket.find();
        prices = new Price(req.body);
        await ticketPrice.save();
        res.status(201)
            .send(prices);
    } catch {
        res.status(404)
            .send({ error: `The price for ${field} could not be updated` })
    }
});

//delete price
router.delete('/booking/:type', async (req, res) => {
    try {
        const field = req.params.type;
        const price = await Ticket.findOne({ field: { $exists: true } });
        delete price.field;
        await price.save();
        res.status(201)
            .send(price);
    } catch {
        res.status(404);
        res.send({ error: `The price for ${field} has been removed` })
    }
});

module.exports = router;