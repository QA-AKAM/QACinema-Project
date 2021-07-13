'use strict';
import '../../../CSS/Pages.css';
import './About.css';
import AboutUs from '../../../Images/About Us.png';
import { useState } from 'react';
import Member from './Member';
import Row from 'react-bootstrap/Row';

const About = () => {
    const [team, setTeam] = useState([
        {
            name: "Kevin",
            role: "Product owner",
            projectMain: "Frontend, Jira, Github",
            projectSecondary: "Styling, Documentation",
            github: "https://github.com/thealinivan",
            linkedin: "https://linkedin.com/in/thealinivan",
            email: "aivan@qa.com",
            telephone: "+447481925997"


        },
        {
            name: "Asshwin",
            role: "Scrum master",
            projectMain: "Backend, Databases, Frontend, Testing",
            projectSecondary: "Scrums, Documentation",
            github: "https://github.com/thealinivan",
            linkedin: "https://linkedin.com/in/thealinivan",
            email: "aivan@qa.com",
            telephone: "+447481925997"

        },
        {
            name: "Matthew Holmes",
            role: "Software developer",
            projectMain: "Frontend, Testing",
            projectSecondary: "Styling, Documentation",
            github: "https://github.com/matayoh14",
            linkedin: "https://www.linkedin.com/in/matthew-holmes-69958a1b1/",
            email: "MHolmes1@academytrainee.com",
            telephone: "+447770339873"

        },
        {
            name: "Alin",
            role: "Software developer",
            projectMain: "Backend, Databases, Cloud, Testing",
            projectSecondary: "Frontend, API, Styling, Documentation",
            github: "https://github.com/thealinivan",
            linkedin: "https://linkedin.com/in/thealinivan",
            email: "aivan@qa.com",
            telephone: "+447481925997"

        }
    ]);
    return (
        <div className="background">
            <div className="bgBlur">
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
                                    <h2 className="display-4 padd-1">About us</h2>
                                    <p className="lead">
                                        QA Cinema is part of QA Limited - one of the UK's leading digital education and skills providers, who ahve now branched out into the entertainement industry. Operated and managed by their leading team, Team AKAM, we strive to provide the best services to our clients and customers.</p>
                                </div>
                                <div className="spec col-sm-6 text-center">
                                    <h2 className="display-4 padd-1">About Team AKAM</h2>
                                    <p className="lead">
                                        Team AKAM is the best of the bunch, no words are needed to describe the sheer presence and intelligence of these individuals. Comparisons can be drawn but no one especially group 1 can even come close to matching our brilliance. Stand there in awe and embrace the almighty before you, or be banished to the shadow realm, <b>Kevin, Asshwin, Matthew, Alin</b>.
                                    </p>
                                </div>
                                <div className="spec col-sm-12 text-center padd-1">
                                    <h2 className="display-4 padd-1">Scrum description</h2>
                                    <p className="lead">
                                        QA Cinema is part of QA Limited - one of the UK's leading digital education and skills providers, who ahve now branched out into the entertainement industry. Operated and managed by their leading team, Team AKAM, we strive to provide the best services to our clients and customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className='txt-area padd-3 c-w'>
                            <h2 className="padd-3">Team</h2>
                            <Row>
                                {team.map(member => (
                                    <Member member={member} />
                                ))}
                            </Row>
                        </div>

                    </div>
                </div>
            </div >
        </div >

    )
}
export default About;