'use strict'
import { Button } from "react-bootstrap";

const DirectionsCard = ({ cardData }) => {
    return (
        <div class="container" style={{ backgroundColor: 'rgba(160, 38, 38, 0.7)', marginTop: '3rem', paddingBottom: '4rem' }}>
            <h2 class='landing-text'>{cardData.title}</h2>
            <h3 class='landing-text' style={{ color: '0,0,0', margin: '30px' }}>{cardData.description}</h3>
            <Button variant="dark" href={cardData.nav}
                style={{
                    padding: '1rem',
                }}>{cardData.btn}</Button>
            <div class='container' style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                marginTop: '3rem',
                overflow: 'hidden'
            }}>
                {cardData.img ?
                    <img src={cardData.img}
                        width="100%"
                        alt="cinema front entrance"
                        style={{ objectFit: 'cover' }} />
                    : cardData.map
                }
            </div>
        </div>
    );
}


export default DirectionsCard;