import React, { Component } from 'react';
import bootstrap from 'bootstrap';

class OrderFields extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div>
      <label>Name:</label>
      <input type="text"
             ref="name"
             defaultValue={ this.props.fieldValues.name } />
<br></br>
      <label>Address:</label>
        <input type="text"
             ref="Address"
             defaultValue={ this.props.fieldValues.Address } />
<br></br>
      <label>PhoneNumber:</label>
        <input type="text"
             ref="PhoneNumber"
             defaultValue={ this.props.fieldValues.PhoneNumber } />
<br></br>
      <select className="custom-select">
        <option select = 'true'>Select BagSize</option>
        <option value="1">Small $25</option>
        <option value="2">Medium $34</option>
        <option value="3">Large $43</option>
      </select>
<br></br>
      <button onClick={ this.saveAndContinue }>Save and Continue</button>
      </div>
    )
  }

  saveAndContinue(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      Address : this.refs.Address.getDOMNode().value,
      PhoneNumber    : this.refs.PhoneNumber.getDOMNode().value,
      //BagSize : this.refs.BagSize.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
}

export default OrderFields;
