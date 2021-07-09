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
import { CardDeck } from "react-bootstrap";

const ReleasedMovie = () => {

    const { movie } = useParams();

    const [movieList, setMovieList] = useState([]);
    const [actorDetails, setActorDetails] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(true);
    const loadTime = 2000;

    const getMovies = () => {
        setTimeout(() => {
            axios.get(`http://localhost:5000/movie/${movie}`)
                .then((response) => {
                    setMovieList(response.data);
                    setLoaded(true);
                })
                .catch((error) => {
                    setLoaded(true);
                    setError(error);
                })
                .finally(() => {
                    setLoaded(false);
                });

        }, loadTime);
    }

    const getActor = (actorList) => {
        const actorArray = [];
        actorList.map((actor) => {
            axios.get(`https://api.themoviedb.org/3/search/person?api_key=ccfef2d1b5f5a0ef2b5cf0b2530b3167&language=en-US&query=${actor.name}&page=1&include_adult=false`, { crossdomain: true })
                .then((response) => {
                    actorArray.unshift(response.data);
                    // actorArray.pop()
                })
                .catch((error) => {
                    setLoaded(true);
                    console.log(error)
                })
                .finally(() => {
                    setLoaded(false);
                });
        })
        console.log(actorArray)
        return actorArray;
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

    if (loaded) {
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
                        <h2>Cast</h2>
                        <div class="card-deck mt-4">
                            {movieList.actors.map((details) => (
                                <div class="card-group">
                                    <Card margin="auto">
                                        <Card.Img class="cardImg" src={details.image} />
                                        <Card.Body>
                                            <Card.Text>{details.name}</Card.Text>
                                            <Card.Subtitle>{details.role}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Row>
                    <Row>
                        <h2>Book Now!</h2>
                        <div class="container">
                            <table class="table table-hover table-dark">
                                <thead>
                                    <tr>
                                        <th colspan="4" scope="colgroup">Showings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dateAssigner(movieList.dateTime).map((date) => (
                                        <tr>
                                            <th scope="col">{date.day}</th>
                                            {date.timeOfMovie.map((time) => (
                                                <td scope="row">{time.time}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ReleasedMovie;