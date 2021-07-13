import '../../../CSS/Pages.css';
import './About.css';
import AboutUs from '../../../Images/About Us.png';
import { useState } from 'react';
import Member from './Member';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const About = () => {
    const [team, setTeam] = useState([
        {
            name: "Kevin",
            role: "Product Owner",
            projectMain: "Frontend, Jira, Github",
            projectSecondary: "Styling, Documentation",
            github: "https://github.com/thealinivan",
            linkedin: "https://linkedin.com/in/thealinivan",
            email: "aivan@qa.com",
            telephone: "+447481925997"


        },
        {
            name: "Asshwin",
            role: "Scrum Master",
            projectMain: "Backend, Databases, Frontend, Testing",
            projectSecondary: "Scrums, Styling, Documentation",
            github: "https://github.com/ashkl",
            linkedin: "https://www.linkedin.com/in/asshwin-mugundharajah-71218a104/",
            email: "AMugundharajah@qa.com",
            telephone: "+447450073483"

        },
        {
            name: "Matthew Holmes",
            role: "Software Developer",
            projectMain: "Frontend, Testing",
            projectSecondary: "Styling, Documentation",
            github: "https://github.com/matayoh14",
            linkedin: "https://www.linkedin.com/in/matthew-holmes-69958a1b1/",
            email: "MHolmes1@academytrainee.com",
            telephone: "+447770339873"

        },
        {
            name: "Alin",
            role: "Software Developer",
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
                <Container className="pt-5">
                    <img
                        src={AboutUs}
                        width="300px"
                        alt="about Us img"
                    />
                    <Container className="padding">
                        <Container>
                            <Row>
                                <Col className="spec col-sm-6">
                                    <h2 className="display-4 padd-1">About us</h2>
                                    <p className="lead justify marg-1">
                                        QA Cinema is part of QA Limited - one of the UK's leading digital education and skills providers, who ahve now branched out into the entertainement industry. Operated and managed by their leading team, Team AKAM, we strive to provide the best services to our clients and customers.</p>
                                </Col>
                                <Col className="spec col-sm-6">
                                    <h2 className="display-4 padd-1">About Team AKAM</h2>
                                    <p className="lead justify marg-1">
                                        Team AKAM is the best of the bunch, no words are needed to describe the sheer presence and intelligence of these individuals. Comparisons can be drawn but no one especially group 1 can even come close to matching our brilliance. Stand there in awe and embrace the almighty before you, or be banished to the shadow realm, <b>Scott Stevens and Amandeep Bassi</b>.

                                    </p>
                                </Col>
                                <Col className="spec col-sm-12 text-center padd-3">
                                    <h2 className="display-4 padd-1">Scrum description</h2>
                                    <p className="lead justify">
                                        QA Cinema is part of QA Limited - one of the UK's leading digital education and skills providers, who ahve now branched out into the entertainement industry. Operated and managed by their leading team, Team AKAM, we strive to provide the best services to our clients and customers.</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container className='txt-area padd-3 c-w'>
                            <h2 className="padd-3">Team</h2>
                            <Row>
                                {team.map(member => (
                                    <Member member={member} />
                                ))}
                            </Row>
                        </Container>

                    </Container>
                </Container>
            </div >
        </div >

    )
}
export default About;