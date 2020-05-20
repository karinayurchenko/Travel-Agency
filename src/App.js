import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/layout/sidebar';
import Nav from './components/layout/nav';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (

    <div className="App">
      <Sidebar />
      <div className="main">
        <Nav />
        <div>
          <Switch>
            <Route exact="/" path="/"><Home /></Route>
          </Switch>
        </div>
      </div>
    </div>

  );
}

export default App;
