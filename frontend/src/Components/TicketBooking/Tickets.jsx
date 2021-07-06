'use strict';
import { useState } from 'react';
import BookingDetails from "./BookingDetails";
import Payment from "./Payment";

const Tickets = () => {

    const [booking, setBooking] = useState({});
    const [booked, setBooked] = useState(false);

    const getBooking = () => {
        setBooked(true);
    }


    if (!booked) {
        return (
            <div class='container'>
                <h3>Tickets</h3>
                <BookingDetails getBookingProp={getBooking} />
            </div>
        )
    } else {
        return (
            <div class='container'>
                <h3>Tickets</h3>
                <Payment bookingProp={booking} />
            </div>
        )
    }

}
export default Tickets;