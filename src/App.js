import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Banner from './components/Home/Banner/Banner';
import Doctors from './components/Home/Doctors/Doctors';
import Nav from './components/Home/Nav/Nav';
import Services from './components/Home/Services/Services';
import Home from './components/Home/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Doctor from './components/Home/Doctor/Doctor';
import Footer from './components/Home/Footer/Footer';
import Contract from './components/Home/Contract/Contract';
import Blog from './components/Home/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav></Nav>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route exact path='/Services'>
            <Services></Services>
          </Route>
          <Route exact path='/contact'>
            <Contract></Contract>
          </Route>
          <Route exact path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;


