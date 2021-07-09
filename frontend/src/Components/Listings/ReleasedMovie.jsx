import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ReleasedMovie.css';

const ReleasedMovie = () => {

    const { movie } = useParams();

    const [movieObj, setMovieObj] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const getMovies = () => {
        axios.get(`http://localhost:5000/movie/${movie}`)
            .then((response) => {
                setMovieObj(response.data);
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

    return (
        <div className="background">
            <Container fluid>
                <div className="pt-5">
                    <Card className="bg-dark text-white">
                        <Row className="no-gutters">
                            <Col md={4}>
                                <img src={imageUpdater(movieObj.imageURL)} width="100%" height="700px" style={{ objectFit: "cover" }} />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title className="cardMovieTitle">{movieObj.title}</Card.Title>
                                    <Card.Text className="cardMovieText">Directed by {movieObj.director}</Card.Text>
                                    <Card.Text className="cardMovieText">Released: {movieObj.year}</Card.Text>
                                    <Card.Subtitle className="cardMovieText">{movieObj.shortPlot}</Card.Subtitle>
                                    <br />
                                    <div>
                                        <Card.Text className="cardMovieText">Cast</Card.Text>
                                        <Row>
                                            {movieObj.actors.map((details) => (
                                                <Col lg={2} className="py-3">
                                                    <Card className="bg-dark text-white">
                                                        <Card.Img class="cardImg" src={details.image} />
                                                        <Card.Body>
                                                            <Card.Subtitle>{details.name}</Card.Subtitle>
                                                            <Card.Text>{details.role}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <Row>
                    <Col lg={12}>
                        <h2>Book Now!</h2>
                        <div class="container">
                            <table class="table table-hover table-dark">
                                <thead>
                                    <tr>
                                        <th colspan="4" scope="colgroup">Showings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dateAssigner(movieObj.dateTime).map((date) => (
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
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default ReleasedMovie;