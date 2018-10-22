
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Auth from './Auth.jsx';
import Navigation from "./components/Navigation.jsx";
import About from "./components/about.jsx";
import bootstrap from 'bootstrap';
import Calendar from "./calendar.jsx";
import Home from './userHome.jsx';
import Form from "./form.jsx";
import Payment from "./components/payment.jsx";
import Status from "./Status.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      lat: '',
      lon: ''
    }
  }
  componentDidMount() {
      navigator.geolocation.getCurrentPosition(location => {
        this.setState({
          lat: location.coords.latitude,
          lon: location.coords.longitude
        })
      });
   }

  render () {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/registro" component={Auth} />
            <Route path="/Form" component={Form} />
            <Route path="/pickDay" component={Calendar} />
          <Route path="/checkout" component={Payment} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />
, document.getElementById('app'));
