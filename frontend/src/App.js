import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import CurrentMovies from './Components/Listings/CurrentMovies';
import UpcomingMovies from './Components/Listings/UpcomingMovies';
import Tickets from './Components/TicketBooking/Tickets';
import Screens from './Components/Information/Screens';
import OpeningTimes from './Components/Information/OpeningTimes';
import Forum from './Components/Information/Forum';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Resources/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Home" >
            <Home />
          </Route>

          <Route path="/CurrentMovies" >
            <CurrentMovies />
          </Route>

          <Route path="/UpcomingMovies" >
            <UpcomingMovies />
          </Route>

          <Route path="/Tickets" >
            <Tickets />
          </Route>

          <Route path="/Screens" >
            <Screens />
          </Route>

          <Route path="/OpeningTimes" >
            <OpeningTimes />
          </Route>

          <Route path="/Forum" >
            <Forum />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
