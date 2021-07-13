'use strict'
import '../../../CSS/Pages.css';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import { Button, SplitButton } from 'react-bootstrap';

const NearbyVenue = ({ cardData }) => {

    return (
        <div className="colorScheme padd-1 marg-1">

            {/* img */}
            <img src={cardData.img}
                width="100%"
                height='600px'
                alt="cinema front entrance"
                style={{ objectFit: 'cover' }} />

            {/* venue title */}
            <h2 className='landing-text' style={{
                padding: '3rem'
            }}>{cardData.title}</h2>

            {/* description */}
            <h5 className='landing-text txt-area c-w '>{cardData.description}</h5>
            <h3 className='landing-text c-g marg-3'>QA Cinema offers:</h3>
            {
                cardData.offers.map(offer => (
                    <h5 class='landing-text marg-1 c-w'>{offer}</h5>
                ))
            }

            {/* address */}
            <h5 className='landing-text padd-3 c-w' style={{ borderTop: '1px solid gray' }}>{cardData.address}</h5>

            {/* buttons */}
            <Button variant="outline-dark"
                className='main-btn marg-1 padd-5'
                href={`tel:${cardData.telephone}`}
                type="tel"
            >Call this venue</Button>

            <Button variant="outline-dark"
                className='main-btn marg-1 padd-5'
                href={cardData.nav}
            >Directions</Button>
        </div >

    )
}
export default NearbyVenue;