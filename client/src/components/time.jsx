import React from 'react';
import Calendar from '../calendar.jsx'

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times:''
    }


  }

  render () {
    return (

      <select >
      <option value="time">9:00 a.m.</option>
      <option value="time">9:30 a.m.</option>
      <option value="time">10:00 a.m.</option>
      <option value="time">10:30 a.m.</option>
      <option value="time">11:00 a.m.</option>
      <option value="time">11:30 a.m.</option>
      <option value="time">12:00 p.m.</option>
      <option value="time">12:30 p.m.</option>
      <option value="time">1:00 p.m.</option>
      <option value="time">1:30 p.m.</option>
      <option value="time">2:00 p.m.</option>
      <option value="time">2:30 p.m.</option>
      <option value="time">3:00 p.m.</option>
      <option value="time">3:30 p.m.</option>
      <option value="time">4:00 p.m.</option>
      <option value="time">4:30 p.m.</option>
      <option value="time">5:00 p.m.</option>
      <option value="time">5:30 p.m.</option>
      <option value="time">6:00 p.m.</option>
      </select>

    )
  }
}

export default Time;
