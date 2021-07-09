'use strict'
import '../../../CSS/Pages.css';

const NearbyVenue = ({ cardData }) => {

    return (
        <div class="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', marginTop: '5rem', paddingBottom: '4rem' }}>
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
            <a href={`tel:${cardData.telephone}`} type="tel" class='landing-text' style={{ color: 'white', margin: '30px' }}
                style={{
                    border: '1px solid red',
                    padding: '1rem',
                    color: 'red',
                    margin: '20px'
                }}>Call this venue</a>
            {/* directions */}
            <a href={cardData.nav}
                style={{
                    border: '1px solid red',
                    padding: '1rem',
                    color: 'red'
                }}>Directions</a>

        </div >

    )
}
export default NearbyVenue;