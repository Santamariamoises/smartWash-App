import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Auth from './Auth.jsx';
import Navigation from "./components/Navigation.jsx";
import Example from "./components/calendar.jsx"
// import Calendar from "./components/calendar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }


  render () {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/cita" component={Example} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
