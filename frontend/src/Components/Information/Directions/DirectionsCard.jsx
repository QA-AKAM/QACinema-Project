import { Button } from 'react-bootstrap';

const DirectionsCard = ({ cardData }) => {
    return (
        <div className="colorScheme marg-3 padd-3">
            <h2 className='landing-text'>{cardData.title}</h2>
            <h3 className='landing-text marg-3'>{cardData.description}</h3>
            <Button className='main-btn marg-1 padd-3' variant="outline-dark" href={cardData.nav}>{cardData.btn}</Button>
            <div style={{ overflow: 'hidden' }}>
                {cardData.img ?
                    <img src={cardData.img}
                        width="100%"
                        alt="cinema front entrance"
                        style={{ objectFit: 'cover' }} />
                    : cardData.map
                }
            </div>
        </div >
    );
}


export default DirectionsCard;