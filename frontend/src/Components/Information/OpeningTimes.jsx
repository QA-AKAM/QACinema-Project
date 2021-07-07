'use strict';
import '../../CSS/Pages.css';

const OpeningTimes = () => {
    return (
        <div class="background">
            <div class="container2">
                <h1 class='landing-text'>Opening Times</h1>
                <div class='container'>
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Day of the Week</th>
                                <th scope="col">Opening</th>
                                <th scope="col"></th>
                                <th scope="col">Closing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Monday</th>
                                <td>13:00</td>
                                <td> - </td>
                                <td>22:00</td>
                            </tr>
                            <tr>
                                <th scope="row">Tuesday</th>
                                <td>13:00</td>
                                <td> - </td>
                                <td>22:00</td>
                            </tr>
                            <tr>
                                <th scope="row">Wednesday</th>
                                <td>13:00</td>
                                <td> - </td>
                                <td>22:00</td>
                            </tr>
                            <tr>
                                <th scope="row">Thursday</th>
                                <td>13:00</td>
                                <td> - </td>
                                <td>22:00</td>
                            </tr>
                            <tr>
                                <th scope="row">Friday</th>
                                <td>13:00</td>
                                <td> - </td>
                                <td>23:30</td>
                            </tr>
                            <tr>
                                <th scope="row">Saturday</th>
                                <td>9:30</td>
                                <td> - </td>
                                <td>23:30</td>
                            </tr>
                            <tr>
                                <th scope="row">Sunday</th>
                                <td>9:30</td>
                                <td> - </td>
                                <td>23:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default OpeningTimes;