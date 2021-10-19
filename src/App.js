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
import Login from './components/Home/Login/Login';
import ServicesDetails from './components/Home/ServicesDetails/ServicesDetails';
import AuthProvider from './context/AuthProvider';
import PrivareRoute from './components/Home/Login/PrivateRoute/PrivareRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Nav></Nav>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivareRoute path='/details/:id'>
              <ServicesDetails></ServicesDetails>
            </PrivareRoute>
            <Route path='/Services'>
              <Services></Services>
            </Route>
            <Route path='/contact'>
              <Contract></Contract>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


