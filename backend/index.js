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
const messageRouter = require('./Routes/MessageRoutes');
const priceRouter = require('./Routes/PriceRoutes');

const commentRouter = require('./Routes/CommentRoutes');

//Connect to MongoDB database
mongoose.connect("mongodb+srv://akam:reactnode@cluster0.ihlmt.mongodb.net/cinema", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.use(express.json());
        app.use(movieRouter);
        app.use(bookingRouter);
        app.use(priceRouter);
        app.use(messageRouter);
        app.use(priceRouter);

        app.use(commentRouter);


        app.listen(PORT, () => {
            console.log(`App running at: ${PORT}`);
        });
    });