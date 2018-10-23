import React from 'react';
import DayPicker from 'react-day-picker';
import $ from 'jquery';
import Time from './components/time.jsx'
import Map from './components/map.jsx'
import { NavLink } from 'react-router-dom';
// import Payment from './components/payment.jsx';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dates: null,
    // };

//    this.handleDayClick = this.handleDayClick.bind(this);

  }

  // handleDayClick(day, { selected }) {
  //   this.setState({
  //     dates: selected ? undefined : day,
  //   });
  // }



  render() {
    return (
      <div>

        <DayPicker
          selectedDays={this.props.state.dates}
          onDayClick={this.props.handleDayClick}
        />
        <p>
          {this.props.state.dates
            ? this.props.state.dates.toLocaleDateString()
            : 'schedule your time'}
        </p>
        <Time />
        <Map />
        <br></br>
        <button><NavLink to ='/checkout'>Pagar</NavLink></button>
      </div>
    );
  }
}
