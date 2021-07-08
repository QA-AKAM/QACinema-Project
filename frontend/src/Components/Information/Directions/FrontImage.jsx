'use strict'
import CinemaOutside from '../../../Images/cinema_outside.jpeg';

const FrontImage = () => {

    return (
        <div class="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', marginTop: '3rem' }}>
            <h2 class='landing-text'>QA Cinema</h2>
            <h3 class='landing-text' style={{ color: '0,0,0' }}>3rd Floor, International House, 1 St Katharine's Way, London E1W 1UN</h3>
            <div class='container' style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                marginTop: '3rem',
                overflow: 'hidden'
            }}>
                <img src={CinemaOutside}
                    height="50%"
                    width="100%"
                    alt="cinema front entrance"
                    style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
}


export default FrontImage;