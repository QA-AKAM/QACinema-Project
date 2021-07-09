import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const BookingDetails = ({ getBookingProp }) => {

    const getBooking = getBookingProp;

    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    const [senior, setSenior] = useState(0);

    const [movieName, setMovieName] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [found, setFound] = useState({});

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        getBooking({ firstname, surname, child, adult, senior, movieName });
    }

    const getMovies = () => {
        axios.get('http://localhost:5000/released/true')
            .then((response) => {
                setLoaded(true);
                setMovieList(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    return (
        <div class='container'>
            <h3> Booking Details </h3>
            <div class='row'>
                <div class='col-sm'>
                    <form>
                        <label> First Name: </label>
                        <input type='text' id='firstname' onChange={(event) => {
                            return setFirstname(event.target.value);
                        }} /><br />
                        <label> Surname: </label>
                        <input type="text" id='surname' onChange={(event) => {
                            return setSurname(event.target.value);
                        }} />
                        <label> Tickets: </label><br />
                        <label> Child </label>
                        <input type="number" id='child' class='ticket-type' onChange={(event) => {
                            return setChild(event.target.value);
                        }} min='0' />
                        <label> Adult </label>
                        <input type="number" id='adult' class='ticket-type' onChange={(event) => {
                            return setAdult(event.target.value);
                        }} min='0' />
                        <label> Senior </label>
                        <input type="number" id='senior' class='ticket-type' onChange={(event) => {
                            return setSenior(event.target.value);
                        }} min='0' /><br />
                        <label> Movie of Choice: </label>
                        <select aria-label="Default select example">
                            <option selected disabled hidden> Select Movie </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select ><br />
                        <label> Date:</label>
                        <input type="date" id='date'></input>
                        <label> Time:</label>
                        <input type="time" id='time' min='9:30' max='23:30' step='900'></input>
                        <button type='submit' class='button btn-primary' id='submit' onClick={handleSubmit}> To Payment </button>
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