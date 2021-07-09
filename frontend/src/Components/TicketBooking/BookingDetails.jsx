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
    const [found, setFound] = useState({});

    //get movies list
    const [movieList, setMovieList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    //get selected movie & set days
    const [selectedMovie, setSelectedMovie] = useState({});
    const [days, setDays] = useState([]);

    //get selected day & set times
    const [selectedDay, setSelectedDay] = useState({});
    const [times, setTimes] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        getBooking({ firstname, surname, child, adult, senior, movieName });
    }

    //get movies
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

    //set movies
    useEffect(() => {
        getMovies();
    }, [movieList]);

    //set days
    useEffect(() => {
        setDays(selectedMovie.dateTime);
    }, [selectedMovie])

    //set timesq
    useEffect(() => {
        const timesOfMovie = selectedDay.timeOfMovie;
        console.log(timesOfMovie);
    }, [selectedDay])

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

                        {/* render movies list */}
                        <label> Movie of Choice: </label>
                        <select aria-label="movie-select"
                            onChange={e =>
                                movieList.map(movie => {
                                    movie._id === e.target.value &&
                                        setSelectedMovie(movie)
                                })
                            }>
                            <option selected disabled hidden> Select Movie </option>
                            {movieList.map(movie => (
                                <option value={movie._id}>{movie.title}</option>
                            ))}
                        </select >

                        {/* render days */}
                        <label> Day: </label>
                        <select aria-label="day-select"
                            onChange={e =>
                                days.map(day => {
                                    day._id === e.target.value &&
                                        setSelectedDay(day)
                                })
                            }>
                            <option selected disabled hidden> Select Day </option>
                            {days.map(day => (
                                <option value={day._id}>{day.day}</option>
                            ))}
                        </select >

                        {/* render times */}


                        {/* render no of tickets (adult, child, senior) */}


                        {/* .....payment? */}


                        <br />
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
        </div >

    )
}

export default BookingDetails;