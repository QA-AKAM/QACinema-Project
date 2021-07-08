'use strict'
import Map from './Map';

const LocationMap = () => {
    const locationCoord = { lat: 51.50756760758714, lng: -0.07379247123104038 }
    return (
        <div class="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <h2 class='landing-text'>Find us on map</h2>
            <h3 class='landing-text' style={{ color: '0,0,0', margin: '30px' }}>We are located just near Tower Bridge (north side)</h3>
            <a href="https://www.google.co.uk/maps/place/QA+Ltd./@51.507524,-0.0737885,19.79z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m8!1m2!2m1!1scar+park!3m4!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!8m2!3d51.5075167!4d-0.0738037"
                style={{
                    border: '1px solid red',
                    padding: '1rem',
                    color: 'red'
                }}>Directions</a>
            <div class='container' style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                marginTop: '3rem',
                overflow: 'hidden'
            }}>
                <Map coord={locationCoord} />
            </div>
        </div>
    );
}


export default LocationMap