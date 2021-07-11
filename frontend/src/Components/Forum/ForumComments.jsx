import { useState, useEffect } from "react";
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


const DiscussionBoard = () => {

    const { movie } = useParams();
    const [commentList, setCommentList] = useState([]);
    const [movieList, setMovieList] = useState({});
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getMovies();
        getComments();
    }, []);

    const getComments = () => {
        axios.get(`http://localhost:5000/comment/${movie}`)
            .then((response) => {
                setLoaded(true);
                setCommentList(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    const getMovies = () => {
        axios.get(`http://localhost:5000/movie/${movie}`)
            .then((response) => {
                setMovieList(response.data);
                setLoaded(true);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    const [movieID, setMovieID] = useState(movie);
    const [author, setAuthor] = useState("");
    const [rate, setRate] = useState("5");
    const [comment, setComment] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (!loaded) {
        return <p>Data is loading</p>
    }

    return (
        <div class="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <Row>
                        <Col className="pt-2" lg={12}>
                            <Card className="bg-dark text-white">
                                <Card.Img src={movieList.imageURL} height="500px" alt={`Poster for ${movieList.title}`} style={{ objectFit: "cover", opacity: 0.5, display: "block", }} />
                                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                                    <div class="bgBlur">
                                        <Card.Title className="cardCommentMovieTitle">{movieList.title}</Card.Title>
                                        <Card.Text className="cardComementMovieText">{movieList.shortPlot}</Card.Text>
                                        <Card.Text className="cardComementMovieText">Directed by {movieList.director}</Card.Text>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="pb-1">
                            <Button variant="dark" size="lg" block onClick={handleShow}>Add a comment...</Button>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a comment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalAuthor">
                                    <Form.Label column sm={2}>
                                        Name:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" name="author" placeholder="Your name..." required value={author} onChange={(event) => {
                                            return setAuthor(event.target.value)
                                        }} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalRating">
                                    <Form.Label column sm={2}>
                                        Rating
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="range" name="rate" min="1" max="10" required value={rate} onChange={(event) => {
                                            return setRate(event.target.value)
                                        }} />
                                        <div>
                                            {rate}/10
                                        </div>
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your comment: </Form.Label>
                                    <Form.Control as="textarea" rows={3} name="comment" maxLength={140} required value={comment} onChange={(event) => {
                                        return setComment(event.target.value)
                                    }} />
                                    <Form.Label>{140 - comment.length} Characters remaining.</Form.Label>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary">
                                Post comment!
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div>
                        <Row>
                            {commentList.map((comment) => (
                                <Col lg={12} className="py-1">
                                    <Card className="bg-dark text-white">
                                        <Card.Body>
                                            <Card.Title>{
                                                comment.comment
                                            }</Card.Title>
                                            <Card.Subtitle>User rating: {comment.rate}/10</Card.Subtitle>
                                        </Card.Body>
                                        <Card.Footer>By {comment.author}</Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Jumbotron>
            </Container >
        </div>
    );
}

export default DiscussionBoard;