import React from 'react';
import DayPicker from 'react-day-picker';
import $ from 'jquery';
import Time from './components/time.jsx'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: null,
    };

    this.handleDayClick = this.handleDayClick.bind(this);
    this.addDay = this.addDay.bind(this);

  }

  handleDayClick(day, { selected }) {
    this.setState({
      dates: selected ? undefined : day,
    });
  }

addDay(dates){
  $.ajax({
       url:'/deliver',
       type: "POST",
       contentType: 'application/json',
       data: JSON.stringify({
         dates: dates
       }),
       success: (data)=> {
       },
       error: (xhr,status,error) => {
       }
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
      </div>
    );
  }
}
