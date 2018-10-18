import React from 'react';
import Calendar from '../calendar.jsx'
import $ from 'jquery';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times:''
    }

this.handleTime = this.handleTime.bind(this);
this.addTime = this.addTime.bind(this);
this.added = this.added.bind(this);

  }

  handleTime(e) {
    e.preventDefault();
    this.setState({times: e.target.value})
  }

  addTime(times){
   $.ajax({
     type: "POST",
     url: "/times",
     contentType: 'application/json',
     data: JSON.stringify({
       times: times
     }),
     success:(data)=> {
     },
     error: (xhr,status,error) => {
       console.log(error);
     }
   });
  }

  added(event) {
    event.preventDefault();
    this.addTime(this.state.times);
    this.setState({
      times: ''
    })
  }
  render () {
    return (
  <div>
    <select
    value={this.state.times}
    onChange={this.handleTime}
    type="select"
    >
      <option>9:00 a.m.</option>
      <option>9:30 a.m.</option>
      <option>10:00 a.m.</option>
      <option>10:30 a.m.</option>
      <option>11:00 a.m.</option>
      <option>11:30 a.m.</option>
      <option>12:00 p.m.</option>
      <option>12:30 p.m.</option>
      <option>1:00 p.m.</option>
      <option>1:30 p.m.</option>
      <option>2:00 p.m.</option>
      <option>2:30 p.m.</option>
      <option>3:00 p.m.</option>
      <option>3:30 p.m.</option>
      <option>4:00 p.m.</option>
      <option>4:30 p.m.</option>
      <option>5:00 p.m.</option>
      <option>5:30 p.m.</option>
      <option>6:00 p.m.</option>
    </select>
      <button onClick={this.added}>Set up Time</button>
  </div>
    )
  }
}

export default Time;
