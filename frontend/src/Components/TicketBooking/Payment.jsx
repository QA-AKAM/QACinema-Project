import { useState } from "react";
import PayPal from "./PayPal";
import { Card } from "react-bootstrap";

const Payment = ({ bookingProp }) => {

    const { firstname, surname, child, adult, senior, movieName } = bookingProp;
    const ticketNo = parseInt(child) + parseInt(adult) + parseInt(senior);
    const total = (5 * child) + (9 * adult) + (7 * senior);

    const [paid, setPaid] = useState(false);

    return (
        paid ?
            <h1> Payment Successful! </h1>
            :
            <div>
                <h1>Order Confirmation</h1>
                <div class='confirm'>
                    <Card>
                        <h3> {ticketNo} {(ticketNo === 1) ? 'Ticket' : 'Tickets'} to see {movieName} </h3>
                        <p> Booker: {firstname} {surname} </p>
                        <p> Tickets: </p>
                        <p> {child} child {(child === 1) ? 'ticket' : 'Tickets'} - £{5 * child} </p>
                        <p> {adult} adult {(adult === 1) ? 'ticket' : 'Tickets'} - £{9 * adult} </p>
                        <p> {senior} senior {(senior === 1) ? 'ticket' : 'Tickets'} - £{7 * senior} </p>
                        <h5> Total - £{total} </h5>
                    </Card>
                </div>
                <PayPal totalProp={total} setPaidProp={setPaid} />
            </div>

    )
}

export default Payment;