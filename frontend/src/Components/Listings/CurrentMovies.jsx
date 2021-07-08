'use strict';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './CurrentMovies.css';

const CurrentMovies = () => {

    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const loadTime = 100;

    const getMovies = () => {
        setTimeout(() => {
            axios.get('http://localhost:5000/released/true')
                .then((response) => {
                    setLoaded(true);
                    setMovieList(response.data);
                })
                .catch((error) => {
                    setLoaded(true);
                    setError(error);
                });
        }, loadTime);
    }

    useEffect(() => {
        getMovies();
    }, []);

    const dateAssigner = (day) => {
        let currentDayNum = new Date().getDay() - 1;
        let currentHour = new Date().getHours()
        let sorted_list = day.slice(currentDayNum).concat(day.slice(0, currentDayNum));
        sorted_list[0].timeOfMovie.map((movieTimeObj) => {
            let movieTime = movieTimeObj.time;
            let movieTimeHr = movieTime.slice(0, 2);
            for (let i = 0; i < sorted_list[0].timeOfMovie.length - 1; i++) {
                if (parseInt(movieTimeHr) < currentHour) {
                    sorted_list[0].timeOfMovie.splice(i, 1);
                    console.log(sorted_list);
                }
            }
        })
        return sorted_list;
    };

    return (
        <div class="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <h1 class='landing-text'> Current Movies </h1>
                    <p class="lead">These are the movies we are currently running!</p>
                    <div>
                        {movieList.map((movie) => (
                            <Card className="bg-dark text-white cardHoverZoom mb-3">
                                <Row className="no-gutters">
                                    <Col md={4}>
                                        <img src={movie.imageURL} height="100%" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title className="cardMovieTitle">{movie.title}</Card.Title>
                                            <Card.Text className="cardMovieText">{movie.shortPlot}</Card.Text>
                                            <Card.Text className="cardMovieText">Directed by {movie.director}</Card.Text>
                                            {movie.actors.map((actor) => (
                                                <div>
                                                    <Card.Text>{actor.name} as {actor.role}</Card.Text>
                                                </div>
                                            ))}
                                            {dateAssigner(movie.dateTime).map((date) => (
                                                <div>
                                                    <Card.Text>{date.day}</Card.Text>
                                                    {date.timeOfMovie.map((time) => (
                                                        <Card.Text>{time.time}</Card.Text>
                                                    ))}
                                                </div>
                                            ))}
                                            <Link to={`/released/${movie._id}`}>
                                                <Button value={movie._id}>View more...</Button>
                                            </Link>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </div>
                </Jumbotron>
            </Container>
        </div>
    )
}
export default CurrentMovies;