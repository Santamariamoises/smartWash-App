import React from 'react';
import DayPicker from 'react-day-picker';
import $ from 'jquery';
import Time from './components/time.jsx'
import Map from './components/map.jsx'
import { NavLink } from 'react-router-dom';
import Payment from './components/payment.jsx';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: null,
    };

    this.handleDayClick = this.handleDayClick.bind(this);

  }

  handleDayClick(day, { selected }) {
    this.setState({
      dates: selected ? undefined : day,
    });
  }

  Schedule(){
    alert("¡Tu servicio ha sido programado!")
  }

  render() {
    return (
      <div>

        <DayPicker
          selectedDays={this.state.dates}
          onDayClick={this.handleDayClick}
        />
        <p>
          {this.state.dates
            ? this.state.dates.toLocaleDateString()
            : 'schedule your time'}
        </p>
        <Time />
        <button onClick={this.Schedule}>¡Programar!</button>
        <Map />
        <br></br>
        <Payment />
      </div>
    );
  }
}
