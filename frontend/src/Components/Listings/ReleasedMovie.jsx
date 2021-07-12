import { useState, useEffect, isValidElement } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ReleasedMovie.css';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom';

const ReleasedMovie = () => {

    const { movie } = useParams();
    const [movieObj, setMovieObj] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [classLink, setClassLink] = useState("")

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
        let dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let date = new Date();
        let currentDayNum = date.getDay();
        if (currentDayNum === 0) {
            currentDayNum = 7;
        }
        let currentHour = date.getHours()
        let sorted_list = getDateForDay(date, day.slice(currentDayNum - 1).concat(day.slice(0, currentDayNum - 1)));
        if (sorted_list[0].day === dayArray[currentDayNum - 1]) {
            for (let i = 0; i < sorted_list[0].timeOfMovie.length + 1; i++) {
                sorted_list[0].timeOfMovie.map((movieTimeObj) => {
                    let movieTimeHr = movieTimeObj.time.slice(0, 2);
                    if (parseInt(movieTimeHr) <= currentHour) {
                        sorted_list[0].timeOfMovie.shift();
                    }
                })
            }
            return sorted_list;
        } else {
            return sorted_list;
        }
    }

    const getDateForDay = (date, sortedList) => {
        let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (let i = 0; i < sortedList.length; i++) {
            let resultDate = new Date(date.getTime());
            let dayOfWeek = dayArray.indexOf(sortedList[i].day);
            resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
            sortedList[i].date = `${resultDate.getDate()}/${(resultDate.getMonth() + 1)}`;
        }
        return sortedList
    }

    const checkTimeAvailable = (timeArray) => {
        if (timeArray.length === 0) {
            return <td colSpan="12">No times available </td>
        } else {
            return (
                timeArray.map((time) => (
                    <td>{time.time}</td>
                ))
            )
        }
    }

    const imageUpdater = (oldImage) => {
        return oldImage.replace('._V1_SX300', '')
    }

    const classification = (classification, switchNum) => {
        const classList = {
            "U": "success",
            "PG": "info",
            "12A": "primary",
            "15": "warning",
            "18": "danger",
            "TBC": "secondary"
        }

        if (switchNum === 1)
            return classList[classification]
        else {
            return Object.keys(classList).indexOf(classification) - 2
        }
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
                                    <Link to={`/classification/${classification(movieObj.classification, 2)}`}>
                                        <Badge className="classificationBadge mb-3" variant={classification(movieObj.classification, 1)}>Rating: {movieObj.classification}</Badge>
                                    </Link>
                                    <Card.Text className="cardMovieText">Runtime: {movieObj.runTime}</Card.Text>
                                    <Card.Text className="cardMovieText">Directed by {movieObj.director}</Card.Text>
                                    <Card.Text className="cardMovieText">Released: {movieObj.year}</Card.Text>
                                    <Card.Subtitle className="cardMovieText">{movieObj.shortPlot}</Card.Subtitle>
                                    <div>
                                        <Row>
                                            {movieObj.actors.map((details) => (
                                                <Col lg={2} md={3} sm={3} xs={5} className="py-3">
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
                                        <th colSpan="12" scope="colgroup">Showing Times</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dateAssigner(movieObj.dateTime).map((date) => (
                                        <tr>
                                            <th scope="col">{date.day} - {date.date}</th>
                                            {checkTimeAvailable(date.timeOfMovie)}
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