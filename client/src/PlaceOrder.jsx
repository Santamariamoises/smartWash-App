import React, { Component } from 'react';
import OrderFields from './components/OrderFields.jsx';
/*import SurveyFields from 'SurveyFields';
import Confirmation from 'Confirmation';
import Success from 'Success';*/

var fieldValues = {
  name: null,
  PhoneNumber: null,
  Address: null
}

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			step: 1
		}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(event) {
        this.setState({value: event.target.value});
        }

  handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
        }

	render () {
		switch(this.state.step) {
			case 1:
				return <OrderFields />
			case 2:
				return <SurveyFields />
			case 3:
				return <Confirmation />
			case 4:
				return <Success />
		};
}


saveValue(fields) {
  return fieldValues = Object.assign({}, fieldValues, fields);

}

nextStep() {
  this.setState({
    step : this.state.step + 1
  })
}

// Same as nextStep, but decrementing
previousStep() {
  this.setState({
    step : this.state.step - 1
  })
}

render() {
  switch (this.state.step) {
    case 1:
      return <OrderFields fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />
    case 2:
      return <SurveyFields fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
    case 3:
      return <Confirmation fieldValues={fieldValues}
                           previousStep={this.previousStep}
                           submitRegistration={this.submitRegistration} />
    case 4:
      return <Success fieldValues={fieldValues} />
  }
}
};

export default PlaceOrder;
