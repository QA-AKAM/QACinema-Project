import { useEffect, useState } from "react";
import PayPal from "./PayPal";
import { Card } from "react-bootstrap";
import axios from 'axios';

const Payment = ({ bookingProp }) => {

    const { name, child, adult, senior, selectedDay, selectedTime, selectedMovie, paymentID } = bookingProp;

    const [prices, setPrices] = useState({});
    const [loaded, setLoaded] = useState(true);
    const [error, setError] = useState(null);

    const ticketNo = parseInt(child) + parseInt(adult) + parseInt(senior);
    const total = (prices.child * child) + (prices.adult * adult) + (prices.senior * senior);

    const [paid, setPaid] = useState(false);

    const round = (price) => Number(price).toFixed(2);

    useState(() => {
        paymentId = paid
    }, [paid]);

    const getPrices = () => {
        axios.get('http://localhost:5000/price')
            .then((response) => {
                setLoaded(true);
                setPrices(response.data[0]);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    useEffect(() => {
        getPrices();
    });

    return (
        paid ?
            <h1> Payment Successful! </h1>
            :
            <div>
                <h1>Order Confirmation</h1>
                <div class='confirm'>
                    <Card>
                        <h3> {ticketNo} {(ticketNo == 1) ? 'Ticket' : 'Tickets'} to see {selectedMovie.title} </h3>
                        <h4>On {selectedDay.day} at {selectedTime.time}</h4>
                        <h4> Booker: {name} </h4>
                        <h4> Tickets: </h4>
                        <h5> {child} child {(child == 1) ? 'ticket' : 'tickets'} - £{round(prices.child * child)} </h5>
                        <h5> {adult} adult {(adult == 1) ? 'ticket' : 'tickets'} - £{round(prices.adult * adult)} </h5>
                        <h5> {senior} senior {(senior == 1) ? 'ticket' : 'tickets'} - £{round(prices.senior * senior)} </h5>
                        <h5> Total - £{round(total)} </h5>
                    </Card>
                </div>
                <PayPal totalProp={total} setPaidProp={setPaid} />
            </div>
    )
}

export default Payment;