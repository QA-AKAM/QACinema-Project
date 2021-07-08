'use strict'
import '../../../CSS/Pages.css';
import FrontImage from './FrontImage'
import LocationMap from './LocationMap'
import Parking from './Parking'
import PublicTransport from './PublicTransport';

const Directions = () => {
    return (
        <div class="background">
            <div class="container">
                <div class="container"></div>
                <h1 class='landing-text'>Directions</h1>

                {/* cinema */}
                <FrontImage />

                {/* map */}
                <LocationMap />

                {/* parking*/}
                <Parking />

                {/* public transport */}
                <PublicTransport />

            </div>
        </div >

    )
}
export default Directions;