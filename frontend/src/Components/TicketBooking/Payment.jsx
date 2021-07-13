import { useEffect, useState } from "react";
import PayPal from "./PayPal";
import { Card } from "react-bootstrap";
import axios from 'axios';

const Payment = ({ bookingProp, getPaymentProp }) => {

    const { name, child, adult, senior, selectedDay, selectedTime, selectedMovie } = bookingProp;
    const getPayment = getPaymentProp;

    const [prices, setPrices] = useState({});
    const [loaded, setLoaded] = useState(true);
    const [error, setError] = useState(null);

    const ticketNo = parseInt(child) + parseInt(adult) + parseInt(senior);

    const [total, setTotal] = useState(null);
    //const total = (prices?.child * child) + (prices?.adult * adult) + (prices?.senior * senior);

    const [paid, setPaid] = useState(false);

    const round = (price) => Number(price).toFixed(2);

    const getPrices = () => {
        axios.get('http://localhost:5000/price')
            .then((response) => {
                setPrices(response.data[0]);
                setLoaded(true);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    useEffect(() => {
        getPrices();
    });

    useEffect(() => {
        setTotal((prices?.child * child) + (prices?.adult * adult) + (prices?.senior * senior));
    }, [prices])

    return (
        paid ?
            <h1> Payment Successful! </h1>
            :
            <div>
                <h1 >Order Confirmation</h1>
                <div class='confirm'>
                    <Card style={{ backgroundColor: '#912323' }} className="card text-center">
                        <h3 style={{ color: '#212121' }}> {ticketNo} {(ticketNo == 1) ? 'Ticket' : 'Tickets'} to see {selectedMovie.title} </h3>
                        <h5>On {selectedDay.day} at {selectedTime.time}</h5>
                        <h5> Booker: {name} </h5>
                        <h3 style={{ color: '#212121' }}> Tickets: </h3>
                        <h6> {child} child {(child == 1) ? 'ticket' : 'tickets'} - £{round(prices.child * child)} </h6>
                        <h6> {adult} adult {(adult == 1) ? 'ticket' : 'tickets'} - £{round(prices.adult * adult)} </h6>
                        <h6> {senior} senior {(senior == 1) ? 'ticket' : 'tickets'} - £{round(prices.senior * senior)} </h6>
                        <h5> Total - £{round(total)} </h5>
                    </Card>
                </div>
                {total &&
                    <PayPal totalProp={round(total)} setPaidProp={setPaid} setPaymentProp={getPayment} />}
            </div>
    )
}

export default Payment;