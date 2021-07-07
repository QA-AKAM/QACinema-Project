const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());

//mongodb
const mongoose = require('mongoose');

//get routes
const movieRouter = require('./Routes/MovieRoutes');
const bookingRouter = require('./Routes/BookingRoutes');
const priceRouter = require('./Routes/PriceRoutes');

//Connect to MongoDB database
mongoose.connect("mongodb+srv://akam:reactnode@cluster0.ihlmt.mongodb.net/cinema", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.use(express.json());
        app.use(movieRouter);
        app.use(bookingRouter);
        app.use(priceRouter);


        app.listen(PORT, () => {
            console.log(`App running at: ${PORT}`);
        });
    });