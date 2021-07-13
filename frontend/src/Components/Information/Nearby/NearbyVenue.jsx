import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import '../../../CSS/Pages.css';

const NearbyVenue = ({ cardData }) => {

    return (

        <Col lg={6} xs={12} md={6} className="p-2">
            <div className="content">

                <Card.Body className="bg-t">
                    <img src={cardData.img}
                        width="100%"
                        height='300px'
                        alt="cinema front entrance"
                        style={{ objectFit: 'cover' }} />
                    <Card.Title className="c-w padd-3">{cardData.title}</Card.Title>
                    <br />
                    <Card.Subtitle className="c-w justify padd-1" style={{ lineHeight: '1.6' }}>{cardData.description}</Card.Subtitle>
                    <h5 className='c-r padd-1' >QA Cinema offers:</h5>
                    <div class='padd-1'>
                        {
                            cardData.offers.map(offer => (
                                <h6 class='landing-text marg-1 c-w'>{offer}</h6>
                            ))
                        }
                    </div>
                    <h5 class='landing-text c-w padd-1' style={{ borderTop: '1px solid white' }}>{cardData.address}</h5>



                    <a href={`tel:${cardData.telephone}`}>
                        <FontAwesomeIcon className='social-icon padd-1' icon={faPhone} size="4x" color="#ff3333" />
                    </a>
                    <a href={cardData.nav}>
                        <FontAwesomeIcon className='social-icon padd-1' icon={faMapMarkedAlt} size="4x" color="#ff3333" />
                    </a>
                </Card.Body>

            </div>

        </Col >

    )
}
export default NearbyVenue;