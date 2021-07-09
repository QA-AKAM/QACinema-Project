import { useState, useEffect, useLayoutEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
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
                            <Card bg="dark" text="dark">
                                <Card.Title>Synopsis</Card.Title>
                                <Card.Text>{movieList.shortPlot}</Card.Text>
                                <Card.Subtitle>Movie runtime: {movieList.runTime}</Card.Subtitle>
                            </Card>
                        </Col>
                    </Row>
                    <h2>Cast</h2>
                    <CardDeck>
                        {movieList.actors.map((details) => (
                            <div class="card-group">
                                <Card >
                                    <Card.Img src={details.image} />
                                    <Card.Body>
                                        <Card.Text>{details.name}</Card.Text>
                                        <Card.Subtitle>{details.role}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </CardDeck>
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