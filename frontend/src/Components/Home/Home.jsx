'use strict';
import { Carousel, Alert } from 'react-bootstrap';
import InTheHeights from '../../Images/In-The-Heights.jpg';
import BlackWidow from '../../Images/Black-Widow.jpg';
import F9 from '../../Images/Fast-and-Furious9.jpg';
import IMAX from '../../Images/Imax.png';
import '../../CSS/Pages.css';
import './Home.css';
const Home = () => {
    return (
        <div class="background">
            <div class="carouselImg">
                <Carousel>
                    <Carousel.Item interval={8000}>
                        {/* <a href="/Movies">
                            Need ID/nAME */}
                        <img
                            className="d-block w-100"
                            src={InTheHeights}
                            alt="In the heights img"
                            href="/Forum"
                        />
                        {/* </a> */}
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img
                            className="d-block w-100"
                            src={BlackWidow}
                            alt="Black Widow img"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img
                            className="d-block w-100"
                            src={F9}
                            alt="Fast and Furious img"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="home">
                <div>
                    <h1 class='landing-text'> Welcome to QA Cinemas</h1>
                    <h3 class="landing-text">Experience all the latest movies in stunning IMAX!</h3>
                </div>
            </div>
            <div class="padding">
                <div class="container">
                    <div class="row">
                        <div class="spec col-sm-6 text-center">
                            <h2 class="display-4">Unrivaled Quality</h2>
                            <p class="lead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>
                        <div class="col-lg-6">
                            <img src={IMAX} alt="" class="imgDiv" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="fixed">
            </div>
        </div>
    )
}
export default Home;