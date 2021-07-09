import { useState, useEffect, useLayoutEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './ReleasedMovie.css';

const ReleasedMovie = () => {

    const { movie } = useParams();
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const getMovies = () => {
        axios.get(`http://localhost:5000/movie/${movie}`)
            .then((response) => {
                setMovieList(response.data);
                setLoaded(true);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            })
    }

    const dateAssigner = (day) => {
        let currentDayNum = new Date().getDay() - 1;
        let currentHour = new Date().getHours()
        let sorted_list = day.slice(currentDayNum).concat(day.slice(0, currentDayNum));
        sorted_list[0].timeOfMovie.map((movieTimeObj) => {
            let movieTime = movieTimeObj.time;
            let movieTimeHr = movieTime.slice(0, 2);
            if (parseInt(movieTimeHr) <= currentHour) {
                sorted_list[0].timeOfMovie.splice(0, 1);
            }
        })
        return sorted_list;
    }

    const imageUpdater = (oldImage) => {
        return oldImage.replace('._V1_SX300', '')
    }

    useEffect(() => {
        getMovies();
    }, []);

    if (!loaded) {
        return <p>Data is loading</p>
    }

    const moviePosterBgStyle = {
        background: `url(${imageUpdater(movieList.imageURL)})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundPosition: "fixed",
        width: "100%",
        display: "table",
        height: "100%",
        position: "relative",
        width: "100%",
        resizeMode: "cover",
        paddingTop: "400px",
        paddingBottom: "400px"
    }

    return (
        <div className="background">
            <div className="container">
                <div style={moviePosterBgStyle}>
                    <div className="landing-movie-title">
                        <h1>{movieList.title}</h1>
                        <h3>{movieList.year} - Directed by {movieList.director}</h3>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>Synopsis</h2>
                            <p>
                                {movieList.shortPlot}
                            </p>
                            <p>
                                Movie runtime: {movieList.runTime}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <h2>Cast</h2>
                            {movieList.actors.map((details) => (
                                <div>
                                    <h5>{details.name} as {details.role}</h5>
                                    <img src={details.image} alt="" />
                                </div>
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Book Now!</h2>
                            {dateAssigner(movieList.dateTime).map((date) => (
                                <div>
                                    <Card.Text>{date.day}</Card.Text>
                                    {date.timeOfMovie.map((time) => (
                                        <div>
                                            <Card.Text>{time.time}</Card.Text>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ReleasedMovie;