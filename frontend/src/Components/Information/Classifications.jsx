import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import './Classifications.css'

const Classifications = () => {

    const horizontalAccordions = (".accordion.width");

    return (
        <div className="background">
            <Container>
                <Jumbotron className="bgBlur">
                    <h1 className="landing-text">Film Classifications</h1>
                    <p className="lead">Film Classifications are used to make sure that the movie you are watching
                        is suitable for you and your family. Scroll down to learn more about the classification system!</p>
                    <Row>
                        <Col lg={6}>
                        </Col>
                        <Col lg={6}>
                            <Accordion defaultActiveKey="0">
                                <Card bg="dark" text="light">
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/BBFC_U_2019.svg" alt="U" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Card.Title>Universal</Card.Title>
                                            <Card.Text>Suitable for all.</Card.Text>
                                            <Card.Text></Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card bg="dark" text="light">
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/BBFC_PG_2019.svg" alt="PG" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Card.Title>Parental Guidance</Card.Title>
                                            <Card.Text>General viewing, however some scenes may unsettle younger children.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card bg="dark" text="light">
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/BBFC_12_2019.svg" alt="12" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Card.Title>12</Card.Title>
                                            <Card.Text>Suitable only for people over 12 years and over.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card bg="dark" text="light">
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/BBFC_12A_2019.svg" alt="12A" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Card.Title>12A</Card.Title>
                                            <Card.Text>Suitable for 12 years and over. Under 12 years may be admitted if accompanined by an adult.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card bg="dark" text="light">
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/BBFC_15_2019.svg" alt="15" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <Card.Title>15</Card.Title>
                                            <Card.Text>Suitable only for 15 years and over.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card bg="dark" text="light">
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/BBFC_18_2019.svg" alt="18" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <Card.Title>18</Card.Title>
                                            <Card.Text>Suitable only for 18 years and over.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card bg="dark" text="light">
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/BBFC_R18_2019.svg" alt="R18" width="15%" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>
                                            <Card.Title>R18</Card.Title>
                                            <Card.Text>QA Cinmea does not show any films that are rated with R18.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default Classifications;