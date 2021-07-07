'use strict';
import '../../CSS/Pages.css';
import './About.css';
import AboutUs from '../../Images/About Us.png';

const About = () => {
    return (
        <div class="background">
            {/* <h2 class='landing-text'>About Us</h2> */}
            <img
                src={AboutUs}
                height="200px"
                width="250px"
                alt="about Us img"
            />
            <div class="padding">
                <div class="container">
                    <div class="row">
                        <div class="spec col-sm-6 text-center">
                            <h2 class="display-4">About us</h2>
                            <p class="lead">
                                QA Cinema is part of QA Limited - one of the UK's leading digital education and skills providers, who ahve now branched out into the entertainement industry. Operated and managed by their leading team, Team AKAM, we strive to provide the best services to our clients and customers.</p>
                        </div>
                        <div class="spec col-sm-6 text-center">
                            <h2 class="display-4">About Team AKAM</h2>
                            <p class="lead">
                                Team AKAM is the best of the bunch, no words are needed to describe the sheer presence and intelligence of these individuals. Comparisons can be drawn but no one especially group 1 can even come close to matching our brilliance. Stand there in awe and embrace the almighty before you, or be banished to the shadow realm, <b>Scott Stevens, Amandeep Bassi.</b>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;