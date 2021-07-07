'use strict';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../../Images/Logo.png';
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="125"
                            height="35"
                            className="d-inline-block align-top"
                        /></Navbar.Brand>
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
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div >
    );
}
export default NavBar;