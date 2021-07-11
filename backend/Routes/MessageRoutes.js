const express = require('express');
const router = express.Router();

const Msg = require('../Models/Message');

//create message method
router.post('/message', async (req, res) => {
    try {
        const msg = new Msg(req.body);
        await msg.save(msg);
        res.status(201).send(msg);
    } catch {
        res.status(404).send({ error: `The request could not be completed` });
    }
});

//get all message method
router.get('/message', async (req, res) => {
    try {
        const msg = await Msg.find();
        res.status(201).send(msg);
    }
    catch {
        res.status(404).send({ error: `No contact messages available` });
    }
});

//update message method
router.put('/message/:id', async (req, res) => {
    try {
        const msg = await Msg.findById(req.params.id);
        Object.assign(msg, req.body);
        await msg.save();
        res.status(201).send(msg);
    } catch {
        res.status(404).send({ error: `The contact message could not be updated` });
    }
});

//delete message method by id
router.delete('/message/:id', async (req, res) => {
    try {
        const msg = await Msg.findById(req.params.id);
        await msg.deleteOne();
        res.status(201).send(msg);
    } catch {
        res.status(404).send({ error: `The contact message could not be removed` });
    }
});

module.exports = router;