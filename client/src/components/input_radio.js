import React from 'react';

class InputRadio extends React.Component {

  render() {
    const {service_speed, days} = this.props;

    return (
      <li>
        <label htmlFor={days + '_day'}>
          <input
            id={days + '_day'}
            type="radio"
            name="service_speed"
            value={days}
            checked={service_speed === parseFloat(days)}
            onChange={ (event) => this.props.updateResults(event, 'speed') }
          />
          {days} day
        </label>
      </li>
    )
  }
}

export default InputRadio;
