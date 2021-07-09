import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const BookingDetails = ({ getBookingProp }) => {

    const getBooking = getBookingProp;

    //set movies list
    const [movieList, setMovieList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    //set selected movie & set days
    const [selectedMovie, setSelectedMovie] = useState({});
    const [days, setDays] = useState([]);

    //set selected day & set times
    const [selectedDay, setSelectedDay] = useState({});
    const [times, setTimes] = useState([]);

    //set selected time
    const [selectedTime, setSelectedTime] = useState({})

    //set tickets
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    const [senior, setSenior] = useState(0);

    //set name
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getBooking({ name, child, adult, senior, selectedDay, selectedTime, selectedMovie, paymentID: null });
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

    //set times
    useEffect(() => {
        setTimes(selectedDay.timeOfMovie);
    }, [selectedDay])

    return (
        <div class='container'>
            <h3> Booking Details </h3>
            <div class='row'>
                <div class='col-sm'>
                    <form>
                        {/* render name */}
                        <label> Booking Name: </label>
                        <input type='text' id='name' onChange={(event) => {
                            setName(event.target.value);
                        }} />

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
                        < label > Day: </label>
                        <select aria-label="day-select"
                            onChange={e =>
                                days.map(day => {
                                    day._id === e.target.value &&
                                        setSelectedDay(day)
                                })
                            }
                        >
                            <option selected disabled hidden> Select Day </option>
                            {days?.map(day => (
                                <option value={day._id}>{day.day}</option>
                            ))}
                        </select >


                        {/* render times */}
                        < label > Time: </label>
                        <select aria-label="time-select"
                            onChange={e =>
                                times.map(time => {
                                    time._id === e.target.value &&
                                        setSelectedTime(time)
                                })
                            }
                        >
                            <option selected disabled hidden> Select Time </option>
                            {times?.map(time => (
                                <option value={time._id}>{time.time}</option>
                            ))}
                        </select >

                        {/* render no of tickets (adult, child, senior) */}
                        <label> Tickets: </label><br />
                        <label> Child </label>
                        <input type="number" id='child' class='ticket-type' value={child}
                            onChange={(event) => {
                                setChild(event.target.value);
                            }} min='0' />
                        <label> Adult </label>
                        <input type="number" id='adult' class='ticket-type' value={adult}
                            onChange={(event) => {
                                setAdult(event.target.value);
                            }} min='0' />
                        <label> Senior </label>
                        <input type="number" id='senior' class='ticket-type' value={senior}
                            onChange={(event) => {
                                setSenior(event.target.value);
                            }} min='0' />

                        {/* submit*/}
                        <button type='submit' class='button btn-primary' id='submit'
                            onClick={handleSubmit}> To Payment </button>
                    </form>
                </div>
                <div class='col-sm'>
                    <Card>

                        {/* <img src={selectedMovie?.imgURL} style={{ witdh: '100px', height: '200px' }} alt="movie poster" /> */}
                        <p style={{ color: 'gray' }}>I found the movie: {selectedMovie.title}</p>
                        <p style={{ color: 'gray' }}>Viewing day: {selectedDay.day}</p>
                        <p style={{ color: 'gray' }}>Viewing time: {selectedTime.time}</p>


                    </Card>
                </div>
            </div>
        </div >

    )
}

export default BookingDetails;