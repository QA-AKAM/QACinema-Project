import './Footer.css';
import Container from 'react-bootstrap/Container';
const Footer = () => {
    return (
        <div class='Footer'>
            <Container>
                <div class='row'>
                    <div class='col-sm'>
                        <a href='/AboutUs'>
                            <p> About Us </p>
                        </a>
                    </div>
                    <div class='col-sm'>
                        <a href='/ContactUs'>
                            <p> Contact Us </p>
                        </a>
                    </div>
                </div>
                <div class='col'>
                    <p> QA Cinema 2021 &copy; </p>
                </div>
            </Container>
        </div>
    )
}
export default Footer;