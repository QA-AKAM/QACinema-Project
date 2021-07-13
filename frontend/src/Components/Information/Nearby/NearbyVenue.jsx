'use strict'
import { Button } from 'react-bootstrap';
import '../../../CSS/Pages.css';

const NearbyVenue = ({ cardData }) => {

    return (
        <div class="container" style={{ backgroundColor: 'rgba(160, 38, 38, 0.7)', marginTop: '5rem', paddingBottom: '4rem' }}>
            {/* img */}
            <img src={cardData.img}
                width="100%"
                height='600px'
                alt="cinema front entrance"
                style={{ objectFit: 'cover' }} />

            {/* venue title */}
            <h2 class='landing-text' style={{
                padding: '3rem'
            }}>{cardData.title}</h2>
            {/* description */}
            <h3 class='landing-text' style={{ color: 'white', margin: '30px', textAlign: 'justify' }}>{cardData.description}</h3>
            <h4 class='landing-text' style={{ color: 'red', margin: '30px' }}>QA Cinema offers:</h4>
            {
                cardData.offers.map(offer => (
                    <h5 class='landing-text' style={{ color: 'white', margin: '30px' }}>{offer}</h5>
                ))
            }
            {/* address */}
            <h4 class='landing-text' style={{ color: 'white', margin: '30px', padding: '2rem', borderTop: '1px solid white' }}>{cardData.address}</h4>
            {/* telephone */}
            <Button variant="dark" href={`tel:${cardData.telephone}`} type="tel" class='landing-text' style={{ color: 'white', margin: '30px' }}
                style={{
                    padding: '1rem',
                    margin: '20px'
                }}>Call this venue</Button>
            {/* directions */}
            <Button variant="dark" href={cardData.nav}
                style={{
                    padding: '1rem',
                }
                }> Directions</Button >

        </div >

    )
}
export default NearbyVenue;