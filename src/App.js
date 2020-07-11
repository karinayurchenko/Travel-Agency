import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/layout/sidebar';
import Nav from './components/layout/nav';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Tours from './pages/tours';
import Hotels from './pages/hotels';
import NewTour from './pages/newTour';
import NewHotel from './pages/newHotel';
import TourDetails from './pages/tourDetails';

function App() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/">
        <div className="App">
          <Sidebar />
          <div className="main">
            <Nav />
            <div>
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/profile"><Profile /></Route>
                <Route exact path="/tours"><Tours /></Route>
                <Route exact path="/hotels"><Hotels /></Route>
                <Route exact path="/newTour"><NewTour /></Route>
                <Route exact path="/newHotel"><NewHotel /></Route>
                <Route exact path="/tourDetails"><TourDetails /></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
