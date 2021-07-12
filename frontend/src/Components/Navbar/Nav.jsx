'use strict';
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Logo from '../../Images/Logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getSearchResults = () => {
        axios.get(`http://localhost:5000/movie/search?s=${searchQuery}`)
            .then((response) => {
                setMovieList(response.data);
            })
    }

    useEffect(() => {
        getSearchResults();
    }, [searchQuery])

    const releasedChecker = (released, title, id) => {
        if (released) {
            return (
                <tr >
                    <Link to={`/released/${id}`} onClick={handleClose}>
                        <td>{title}</td>
                    </Link>
                </tr>
            )
        } else if (!released) {
            return (
                <tr >
                    <Link to={`/upcoming/${id}`} onClick={handleClose}>
                        <td>{title}</td>
                    </Link>
                </tr>
            )
        }
    }

    return (
        <Navbar className="NavBar" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/Home">
                    <img
                        alt=""
                        src={Logo}
                        width="125"
                        height="35"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/CurrentMovies">Current Movies</NavDropdown.Item>
                            <NavDropdown.Item href="/UpcomingMovies">Upcoming Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Tickets">Tickets</Nav.Link>
                        <Nav.Link href="/Screens">Screens</Nav.Link>
                        <Nav.Link href="/OpeningTimes">Opening Times</Nav.Link>
                        <Nav.Link href="/Forum">Forum</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-danger" onClick={handleShow}>Search</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Search for something!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Control type="text" placeholder="Search Term" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                                <Table flush>
                                    <thead>
                                        <tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movieList.map((movie, i) => (
                                            releasedChecker(movie.released, movie.title, movie._id)
                                        ))}
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}
export default NavBar;