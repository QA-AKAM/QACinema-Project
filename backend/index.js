const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());

//mongodb
const mongoose = require('mongoose');

//get routes

//Connect to MongoDB database
mongoose.connect("mongodb://localhost/qacinema", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.use(express.json());

        app.listen(PORT, () => {
            console.log(`App running at: ${PORT}`);
        });
    });