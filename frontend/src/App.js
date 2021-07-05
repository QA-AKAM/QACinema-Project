import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar/Nav';
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Resources/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          {/* <Route path="/Home" >
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
