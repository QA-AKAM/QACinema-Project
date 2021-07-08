'use strict';
import '../../CSS/Pages.css';

import { useState } from 'react';
import BookingDetails from "./BookingDetails";
import Payment from "./Payment";
import { Card } from 'react-bootstrap';

const Tickets = () => {

    const [booking, setBooking] = useState([]);
    const [booked, setBooked] = useState(false);

    const getBooking = (details) => {
        console.log(details);
        setBooked(true);
        setBooking(details);
    }


    if (!booked) {
        return (
            <div class='background'>
                <div class="container2">
                    <div class='container'>
                        <h1 class='landing-text'>Tickets</h1>
                        <Card class="card text-white bg-dark">
                            <BookingDetails getBookingProp={getBooking} />
                        </Card>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div class='background'>
                <div class="container2">
                    <div class='container'>
                        <h1 class='landing-text'>Tickets</h1>
                        <Card class='card'>
                            <Payment bookingProp={booking} />
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tickets;