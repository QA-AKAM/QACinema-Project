'use strict';
import { Carousel, Alert, Container, Col, Row } from 'react-bootstrap';
import InTheHeights from '../../Images/In-The-Heights.jpg';
import BlackWidow from '../../Images/Black-Widow.jpg';
import F9 from '../../Images/Fast9.jpg';
import DemonSlayer from '../../Images/Demon Slayer.jpg';
import IMAX from '../../Images/Imax.png';
import IMAXScreen from '../../Images/Imax screen.jpg';
import '../../CSS/Pages.css';
import './Home.css';
const Home = () => {
    return (
        <div class="background">
            <Container>
                <Carousel>
                    <Carousel.Item interval={8000}>
                        {/* <a href="/Movies">
                            Need ID/nAME */}
                        <img
                            className="d-block w-100"
                            src={InTheHeights}
                            alt="In the heights img"
                            href="/Forum"
                            height="625"

                        />
                        {/* </a> */}
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img
                            className="d-block w-100"
                            src={BlackWidow}
                            alt="Black Widow img"
                            height="625"

                        />
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img
                            className="d-block w-100"
                            src={DemonSlayer}
                            alt="Demon Slayer img"
                            height="625"

                        />
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img
                            className="d-block w-100"
                            src={F9}
                            alt="Fast and Furious img"
                            height="625"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <div class="bgBlur">
                <div id="home">
                    <h1 class='landing-text'> Welcome to QA Cinemas</h1>
                    <h3 class="landing-text">Experience all the latest movies in stunning IMAX!</h3>
                </div>
                <div class="container">
                    <Row>
                        <Col className="col-md-6 text-center">
                            <h2 class="display-4">Unrivaled Quality</h2>
                            <p class="lead">
                                Immerse yourself completely in the big screen experience with QA Cinemas IMAX. Every aspect of our IMAX Screens is designed to pull you into the film. Indulge in the journey that tickles your senses and brings them back to life. Transporting yourself into a new reality with our super-sized screens pulling you into the film, ear-tingling audio environment to ensure you can even hear a pin drop and where within the film as well as breath-taking imagery, watching movies on your computer will never be the same again.
                            </p>
                        </Col>
                        <Col className="col-md-6">
                            <Container>
                                <img src={IMAX} alt="Imax Logo" class="imgDiv" />
                            </Container>
                        </Col>
                    </Row>
                    <div>
                        <img src={IMAXScreen} alt="Imax Screen img" class="imgContainer" />
                    </div>
                </div>
                <div id="fixed">
                </div>
            </div>
        </div >
    )
}
export default Home;