import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../Navbar/Navbar';
//import logo from './logo.svg';
import './App.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import News from '../News/News';
import Downloads from '../Downloads/Downloads';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Account from '../Account/Account';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/downloads">
            <Downloads />
          </Route>
          <Route exact path="/wiki">

          </Route>
          <Route exact path="/highscores">

          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/account" >
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;