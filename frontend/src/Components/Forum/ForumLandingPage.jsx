import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ForumLandingPage.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

const DiscussionBoardMain = () => {

    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

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

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div class="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <h1 class='landing-text'> Forum </h1>
                    <p class="lead">Discuss about your movie experiences here!</p>
                    <div>
                        <Row>
                            {movieList.map((movie) => (
                                <Col lg={4} className="py-3">
                                    <Card className="bg-dark text-white cardHoverZoom">
                                        <Card.Img src={movie.imageURL} height="200px" style={{ objectFit: "cover", opacity: 0.8 }} />
                                        <Card.Body>
                                            <Card.Text>Click the button below to talk about {movie.title}!</Card.Text>
                                            <Link to={`/comments/${movie._id}`}>
                                                <Button value={movie._id}>View Comments...</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default DiscussionBoardMain;