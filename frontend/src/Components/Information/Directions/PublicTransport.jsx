'use strict'
import FromUnderground from '../../../Images/directions_from_underground.jpg';
import FromBus from '../../../Images/directions_from_underground.jpg';


const PublicTransport = () => {
    return (
        <>


            <div class="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', marginTop: '5rem' }}>
                <h2 class='landing-text'>Public transport</h2>
                <h3 class='landing-text' style={{ color: '0,0,0', margin: '30px' }}>Tower Hill Underground Station</h3>
                <a href="https://www.google.co.uk/maps/dir/Tower+Hill+Underground+Station/3rd+Floor,+QA+Ltd.,+International+House,+1+St+Katharine's+Way,+London+E1W+1UN/@51.5088432,-0.0767431,17.42z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m14!4m13!1m5!1m1!1s0x4876034c01181b61:0xe9a9202d18723f58!2m2!1d-0.0766609!2d51.5101178!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!3e2"
                    style={{
                        border: '1px solid red',
                        padding: '1rem',
                        color: 'red'
                    }}>Walk from underground </a>
                <div class='container' style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    marginTop: '3rem',
                    overflow: 'hidden'
                }}>
                    <img src={FromUnderground}
                        height="50%"
                        width="100%"
                        alt="cinema front entrance"
                        style={{ objectFit: 'cover' }} />
                </div>
            </div>

            <div class="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', marginTop: '1rem' }}>

                <h3 class='landing-text' style={{ color: '0,0,0', margin: '30px' }}>St Katharine Dock (Stop TS)</h3>
                <a href="https://www.google.co.uk/maps/dir/St+Katharine+Dock+(Stop+TS),+London+E1W+1BF/QA+Ltd/@51.5082367,-0.0737202,18.35z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m14!4m13!1m5!1m1!1s0x48760349ea7a73a9:0x7ced1ed64f02620!2m2!1d-0.0717084!2d51.5084763!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!3e2!5m1!1e2"
                    style={{
                        border: '1px solid red',
                        padding: '1rem',
                        color: 'red'
                    }}>Walk from bus station </a>
                <div class='container' style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    marginTop: '3rem',
                    overflow: 'hidden'
                }}>
                    <img src={FromBus}
                        height="50%"
                        width="100%"
                        alt="cinema front entrance"
                        style={{ objectFit: 'cover' }} />
                </div>
            </div>



        </>


        // <div class="container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', margin: '3rem' }}>
        //     <h3 class='landing-text' style={{ color: '0,0,0', margin: '50px' }}>St Katharine Dock (Stop TS)</h3>
        //     <a href="https://www.google.co.uk/maps/dir/St+Katharine+Dock+(Stop+TS),+London+E1W+1BF/QA+Ltd/@51.5082367,-0.0737202,18.35z/data=!3m1!5s0x487603555f190937:0x5ddb3b1b364ab175!4m14!4m13!1m5!1m1!1s0x48760349ea7a73a9:0x7ced1ed64f02620!2m2!1d-0.0717084!2d51.5084763!1m5!1m1!1s0x487603544462f21d:0x60c3dd1ddc3bc0b7!2m2!1d-0.0738037!2d51.5075167!3e2!5m1!1e2"
        //         style={{
        //             border: '1px solid red',
        //             padding: '1rem',
        //             color: 'red'
        //         }}>Walk from bus station </a>
        //     <div class='container' style={{
        //         backgroundColor: 'rgba(0, 0, 0, 0.6)',
        //         marginTop: '3rem',
        //         overflow: 'hidden'
        //     }}>
        //         <img src={FromBus}
        //             height="50%"
        //             width="100%"
        //             alt="cinema front entrance"
        //             style={{ objectFit: 'cover' }} />
        //     </div>
        // </div>





    );
}


export default PublicTransport;