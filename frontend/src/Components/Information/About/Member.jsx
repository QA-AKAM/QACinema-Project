import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faWpforms, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const Member = ({ member }) => {
    return (
        <Col xl={4} lg={6} xs={12} md={6} className="p-2">
            <Card.Body className="bg-t">
                <Card.Title className="padd-1 colorScheme">{member.name}</Card.Title>
                <Card.Title className="padd-1 main-border">{member.role}</Card.Title>
                <br />
                <h5>Main contributions</h5>
                <Card.Subtitle className="padd-1 min-h">{member.projectMain}</Card.Subtitle>
                <h5>Secondary contributions</h5>
                <Card.Subtitle className="padd-1 min-h">{member.projectSecondary}</Card.Subtitle>
                <a href={member.github}>
                    <FontAwesomeIcon className='social-icon padd-1' icon={faGithub} size="4x" color="#ff3333" />
                </a>
                <a href={member.linkedin}>
                    <FontAwesomeIcon className='social-icon padd-1' icon={faLinkedinIn} size="4x" color="#ff3333" />
                </a>
                <a href={`mailto:${member.email}`}>
                    <FontAwesomeIcon className='social-icon padd-1' icon={faEnvelope} size="4x" color="#ff3333" />
                </a>
                <a href={`tel:${member.telephone}`}>
                    <FontAwesomeIcon className='social-icon padd-1' icon={faPhone} size="4x" color="#ff3333" />
                </a>
            </Card.Body>
        </Col>
    );
}

export default Member;