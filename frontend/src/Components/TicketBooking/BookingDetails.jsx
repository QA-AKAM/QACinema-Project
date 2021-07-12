import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './BookingDetails.css';
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
        getBooking({ name: name, child: child, adult: adult, senior: senior, selectedDay: selectedDay, selectedTime: selectedTime, selectedMovie: selectedMovie, paymentID: null });
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
        <div class='container' className='bg-dark text-white'>
            <h3> Booking Details </h3>
            <form className='container'>
                <div class="form-group">
                    {/* render name */}
                    <label> Booking Name: </label>
                    <input type='text' id='name' class="form-control" placeholder="Jane Doe" form-controlonChange={(event) => {
                        setName(event.target.value);
                    }} />
                </div>
                <div class="form-group">
                    {/* render movies list */}
                    <label> Movie of Choice: </label>
                    <select aria-label="movie-select" class="form-control"
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
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        {/* render days */}
                        < label > Day: </label>
                        <select aria-label="day-select" class="form-control"
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
                    </div>
                    <div class="form-group col-md-6">
                        {/* render times */}
                        < label > Time: </label>
                        <select aria-label="time-select" class="form-control"
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
                    </div>
                </div>
                {/* render no of tickets (adult, child, senior) */}
                <div class="container">
                    <h5> Tickets: </h5>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label> Child </label>
                            <select aria-label="ticket-select" id='child' class="form-control" value={child}
                                onChange={(event) => {
                                    setChild(event.target.value);
                                }} min='0'>
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label> Adult </label>
                            <select aria-label="ticket-select" id='adult' class="form-control" value={adult}
                                onChange={(event) => {
                                    setAdult(event.target.value);
                                }} min='0'>
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label> Senior </label>
                            <select aria-label="ticket-select" id='senior' class="form-control" value={senior}
                                onChange={(event) => {
                                    setSenior(event.target.value);
                                }} min='0'>
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    {/* submit*/}
                    <Button type='submit' class='button btn-primary' id='submit'
                        onClick={handleSubmit}> To Payment </Button>
                </div>

            </form>
            <div class='col-sm'>
                <Card>

                    {/* <img src={selectedMovie?.imgURL} style={{ witdh: '100px', height: '200px' }} alt="movie poster" /> */}
                    <p style={{ color: 'gray' }}>I found the movie: {selectedMovie.title}</p>
                    <p style={{ color: 'gray' }}>Viewing day: {selectedDay.day}</p>
                    <p style={{ color: 'gray' }}>Viewing time: {selectedTime.time}</p>

                </Card>
            </div>
        </div >

    )
}

export default BookingDetails;