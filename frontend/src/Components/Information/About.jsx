'use strict';
import '../../CSS/Pages.css';
import './About.css';
import AboutUs from '../../Images/About Us.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className="background">
            <div className="padd-3">
                <img
                    src={AboutUs}
                    width="300px"
                    alt="about Us img"
                />
                <div className="padding">
                    <div className="container">
                        <div className="row">
                            <div className="spec col-sm-6 text-center">
                                <h2 className="display-4">About us</h2>
                                <p className="lead">
                                    QA Cinema is part of QA Limited - one of the UK's leading digital education and skills providers, who ahve now branched out into the entertainement industry. Operated and managed by their leading team, Team AKAM, we strive to provide the best services to our clients and customers.</p>
                            </div>
                            <div className="spec col-sm-6 text-center">
                                <h2 className="display-4">About Team AKAM</h2>
                                <p className="lead">
                                    Team AKAM is the best of the bunch, no words are needed to describe the sheer presence and intelligence of these individuals. Comparisons can be drawn but no one especially group 1 can even come close to matching our brilliance. Stand there in awe and embrace the almighty before you, or be banished to the shadow realm, <b>Scott Stevens, Amandeep Bassi.</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='container padd-3 bg-t'>
                        <a href="https://www.youtube.com/c/qa-cinema"
                            className="youtube social padd-3">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faYoutube} size="5x" color="#ff3333" />
                        </a>
                        <a href="https://www.facebook.com/qa-cinema/"
                            className="facebook social padd-3">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faFacebook} size="5x" color="#ff3333" />
                        </a>
                        <a href="https://www.twitter.com/qa-cinema padd-3" className="twitter social padd-3">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faTwitter} size="5x" color="#ff3333" />
                        </a>
                        <a href="https://www.instagram.com/qa-cinema padd-3"
                            className="instagram social padd-3">
                            <FontAwesomeIcon className='social-icon padd-1' icon={faInstagram} size="5x" color="#ff3333" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About;