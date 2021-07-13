'use strict';
import '../../CSS/Pages.css';
import { useEffect, useState } from 'react';
import BookingDetails from "./BookingDetails";
import Payment from "./Payment";
import { Card, Jumbotron, Container } from 'react-bootstrap';
import axios from 'axios';

const Tickets = () => {

    const [booking, setBooking] = useState(null);
    const [booked, setBooked] = useState(false);
    const [payment, setPayment] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');


    const getBooking = (details) => {
        setBooked(true);
        setBooking(details);
    }

    const getPayment = (paymentID) => {
        setPayment(paymentID);
    }

    useEffect(() => {
        payment &&
            axios.post('http://localhost:5000/booking', {
                "name": booking?.name,
                "movieID": booking?.selectedMovie?._id,
                "day": booking?.selectedDay?.day,
                "time": booking?.selectedTime?.time,
                "noOfTickets": {
                    "noOfAdult": booking?.adult,
                    "noOfChild": booking?.child,
                    "noOfConcession": booking?.senior
                },
                "paymentID": payment
            })
                .then(() => {
                    setLoaded(true);
                })
                .catch((error) => {
                    setLoaded(true);
                    setError(error);
                });
    }, [payment]);


    if (!booked) {
        return (
            <div class='background'>
                <div class='fullscreen'>
                    <Container>
                        <Jumbotron className="bgBlur text-white">
                            <h1 class='landing-text'>Tickets</h1>
                            <BookingDetails getBookingProp={getBooking} />
                        </Jumbotron>
                    </Container>
                </div>
            </div >
        )
    } else {
        return (
            <div class='background'>
                <div class='fullscreen'>
                    <Container>
                        <Jumbotron className="bgBlur">
                            <h1 class='landing-text'>Tickets</h1>
                            <Card style={{ flex: 1, backgroundColor: '#A02626' }} className="text-white">
                                <Payment bookingProp={booking} getPaymentProp={getPayment} />
                            </Card>
                        </Jumbotron>
                    </Container>
                </div>
            </div>
        )
    }
}
export default Tickets;