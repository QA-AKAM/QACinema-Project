import '../../CSS/Pages.css';
import { Card, Accordion, Button, Container } from "react-bootstrap"

const Screens = () => {
    return (
        <div>
            <div class='background'>
                <h1 class='landing-text'> Screens </h1>
                <div class='container'>
                    <Card className="bg-dark text-white">
                        <div class='row'>
                            <div class='col-sm'>
                                <img src="./Images/StandardDecor.png" alt='Our Standard Cinema Screen Decor' width='500px' />
                            </div>
                            <div class='col-sm'>
                                <h4> Standard Seating </h4>
                                <p> Look! Our seating is super bootiful! </p>
                            </div>
                        </div>
                        <div class='container'>
                            <Accordion>
                                <Card className="bg-secondary">
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="text" eventKey="0" className="bg-secondary text-white">
                                            View Seating Plan
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <img src="./Images/StandardPlan.png" alt='Standard Seating Plan' width='100%' />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <p />
                    </Card>
                    <p />
                    <Card className="bg-dark text-white">
                        <div class='row'>
                            <div class='col-sm'>
                                <h4> Deluxe Seating </h4>
                                <p> Look! Our seating is super bootiful! </p>
                            </div>
                            <div class='col-sm'>
                                <img src="./Images/DeluxeDecor.png" alt='Our Deluxe Cinema Screen Decor' width='500px' />
                            </div>
                        </div>
                        <div class='container'>
                            <Accordion>
                                <Card className="bg-secondary">
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="text" eventKey="0" className="bg-secondary text-white">
                                            View Seating Plan
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <img src="./Images/DeluxePlan.png" alt='Deluxe Seating Plan' width='100%' />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <p />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Screens;
