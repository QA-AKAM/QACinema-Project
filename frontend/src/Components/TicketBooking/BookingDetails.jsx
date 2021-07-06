import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const BookingDetails = ({ getBookingProp }) => {

    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    const [senior, setSenior] = useState(0);

    const [movieName, setMovieName] = useState('');
    const [found, setFound] = useState({});

    const handleSubmit = () => {

    }

    useEffect(() => {
        movieSearch();
    }, [movieName])

    const movieSearch = () => {

    }

    return (
        <div class='container'>
            <h3> Booking Details </h3>
            <div class='row'>
                <div class='col-sm'>
                    <form>
                        <label> First Name: </label>
                        <input type='text' id='firstname' /><br />
                        <label> Surname: </label>
                        <input type="text" id='surname' width='100%' />
                        <label> Tickets: </label><br />
                        <label> Child </label>
                        <input type="number" id='child' class='ticket-type' onChange={setChild} min='0' />
                        <label> Adult </label>
                        <input type="number" id='adult' class='ticket-type' onChange={setAdult} min='0' />
                        <label> Senior </label>
                        <input type="number" id='senior' class='ticket-type' onChange={setSenior} min='0' /><label> Movie of Choice: </label>
                        <input type="text" id='movie' onChange={setMovieName} />
                        <label> Date:</label>
                        <input type="date" id='date'></input>
                        <label> Time:</label>
                        <input type="time" id='time' min='9:30' max='23:30' step='900'></input>
                        <button type='submit' class='button btn-primary' id='submit' onSubmit={{ handleSubmit }}> To Payment </button>
                    </form>
                </div>
                <div class='col-sm'>
                    <Card>
                        <p>I found the movie {found.Title}</p>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default BookingDetails;