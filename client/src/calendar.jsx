
import React from 'react';
import DayPicker from 'react-day-picker';
import $ from 'jquery';
import Time from './components/time.jsx'
import Map from './components/map.jsx'
import { NavLink } from 'react-router-dom';
import Payment from './components/payment.jsx';
import Form from "./form.jsx";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Form />
        <Time />
        <button onClick={this.Schedule}>¡Programar!</button>
        <Map />
        <br></br>
        <Payment />
      </div>
    );
  }
}
