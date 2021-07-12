import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Footer = () => {
    return (
        <div class='Footer'>
            <Container>
                <Row>
                    <Col>
                        <a href='/About'>
                            <p1> About Us </p1>
                        </a>
                    </Col>
                    <Col>
                        <a href='/Directions'>
                            <p1> Navigation </p1>
                        </a>
                    </Col>
                    <Col>
                        <a href='/Nearby'>
                            <p1> Nearby Venues </p1>
                        </a>
                    </Col>
                    <Col>
                        <a href='/ContactUs'>
                            <p1> Contact Us </p1>
                        </a>
                    </Col>
                </Row>
                <Col>
                    <p2> QA Cinema 2021 &copy; </p2>
                </Col>
            </Container>

        </div>
    )
}
export default Footer;