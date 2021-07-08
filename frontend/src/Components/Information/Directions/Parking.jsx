'use strict'
import ParkingOutside from '../../../Images/parking_outside.jpg';

const Parking = () => {
    return (
        <div class="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', marginTop: '3rem' }}>
            <h2 class='landing-text'>Minories Car Park</h2>
            <h3 class='landing-text' style={{ color: '0,0,0', margin: '30px' }}>1 Shorter St, London E1 8LP</h3>
            <a href="https://www.google.co.uk/maps/place/Minories+Car+Park/@51.5103371,-0.0730342,16z/data=!4m9!1m2!2m1!1scar+park!3m5!1s0x0:0x398064c92140ae17!8m2!3d51.5103364!4d-0.0730151!15sCghjYXIgcGFya1oKIghjYXIgcGFya5IBC3BhcmtpbmdfbG90mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJSYWs0eWNYaEJSUkFC"
                style={{
                    border: '1px solid red',
                    padding: '1rem',
                    color: 'red'
                }}>Open in Maps</a>
            <div class='container' style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                marginTop: '3rem',
                overflow: 'hidden'
            }}>
                <img src={ParkingOutside}
                    height="50%"
                    width="100%"
                    alt="cinema front entrance"
                    style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
}


export default Parking;