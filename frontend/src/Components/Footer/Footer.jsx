import './Footer.css';
import Container from 'react-bootstrap/Container';
const Footer = () => {
    return (
        <div class='Footer'>
            <Container>
                <div class='row'>
                    <div class='col-sm'>
                        <a href='/About'>
                            <p1> About Us </p1>
                        </a>
                    </div>
                    <div class='col-sm'>
                        <a href='/ContactUs'>
                            <p1> Contact Us </p1>
                        </a>
                    </div>
                </div>
                <div class='col'>
                    <p2> QA Cinema 2021 &copy; </p2>
                </div>
            </Container>

        </div>
    )
}
export default Footer;