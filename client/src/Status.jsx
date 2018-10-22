import React, { Component } from 'react';
import Results from './results.js';
import InputRadio from './input_radio.js';
import { calculate_shipping } from './main.js';

class Status extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shipping_speed: '5',
      weight_kg: '0',
      weight_ozs: '0',
      departure_date: '',
      arrival_date: '',
      cost: '0'
    };
    this.updateResults = this.updateResults.bind(this);
    this.handleCurrent_Speed = this.handleCurrent_Speed.bind(this);
    this.handleCurrent_weight = this.handleCurrent_weight.bind(this);
    this.handleCalculate_shipping = this.handleCalculate_shipping.bind(this);
    this.handleDeparture_date=this.handleDeparture_date.bind(this);
    this.handleArrival_date=this.handleArrival_date.bind(this);
    this.handleCost=this.handleCost.bind(this);
  }

handleCurrent_Speed(e) {
  e.preventDefault();
  this.setState({shipping_speed: e.target.value})
}

handleCurrent_weight(e) {
  e.preventDefault();
  this.setState({weight_kg: e.target.value})
}

handleCalculate_shipping(e) {
  e.preventDefault();
  this.setState({current_weight, current_speed: e.target.value})
}

handleDeparture_date(e) {
  e.preventDefault();
  this.setState({departure_date: e.target.value})
}

handleArrival_date(e) {
  e.preventDefault();
  this.setState({arrival_date: e.target.value})
}

handleCost(e) {
  e.preventDefault();
  this.setState({cost: e.target.value})
}
  updateResults(e, type) {
    const current_weight = (type === 'weight') ? e.target.value : this.state.weight_kg;
    const current_speed = (type === 'speed') ? e.target.value : this.state.shipping_speed;

    const {
      weight_ozs,
      weight_kg,
      shipping_speed,
      departure_date,
      arrival_date,
      cost
    } = calculate_shipping(current_weight, current_speed);

    this.setState({
      shipping_speed: shipping_speed,
      weight_kg: weight_kg,
      weight_ozs: weight_ozs,
      departure_date: departure_date,
      arrival_date: arrival_date,
      cost: cost
    });
  }

  render() {
    return (
      <section>
        <h6 className="font-weight-bold d-block p-2 bg-primary text-black">
          Charges will be based on the weight of your LaundryBag upon pick up.
          The weight will be rounded up to the next kg.
          There is a 1 kg minimum charge for each LaundryBag weighing less than 1 kg.
          All shipments are subject to reweigh on arrival to LaundryMat.
        </h6>
        <form>
          <label htmlFor="shipping_weight">
            <h5 className="font-weight-bold d-block p-2 bg-primary text-black">
            Select Weight of LaundryBag in kilograms
            </h5>
          </label>
          <input
            id="shipping_weight"
            type="number"
            placeholder="Weight of package in kilograms"
            value={this.state.weight_kg}
            onChange={ (event) => this.updateResults(event, 'weight') }/>
          <h6><label htmlFor="radio_buttons" className="font-weight-bold d-block p-2 bg-primary text-black">Select Service</label></h6>
          <ul id="radio_buttons" class="custom-control custom-radio">
            <h1 className="font-weight-bold d-block p-2 bg-primary text-black">Economic $90 PerKg plus Tax</h1>
            <br></br>
            <InputRadio class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" updateResults={this.updateResults} shipping_speed={this.state.shipping_speed} days="5" />
            <br></br>
            <h1 className="font-weight-bold d-block p-2 bg-primary text-black">Standard $150 PerKg plus Tax</h1>
            <br></br>
            <InputRadio updateResults={this.updateResults} shipping_speed={this.state.shipping_speed} days="3" />
            <br></br>
            <h1 className="font-weight-bold d-block p-2 bg-primary text-black">Express $250 PerKg plus Tax</h1>
            <br></br>
            <InputRadio updateResults={this.updateResults} shipping_speed={this.state.shipping_speed} days="2" />
          </ul>
        </form>
        <Results details={this.state}/>
      </section>
    );
  }
}

export default Status;


// 
// import React from 'react';
//
// // this is going to retrieve info from database,
// //indicating the status of the order
//
//
// //if orden en curso, render (conditional rendering)
// const Status = (props) => {
//  return (
//    <div>
//      <h2>Tu ropa está *esperando este componente**</h2>
//   </div>
//  );
// }
//
// export default Status;
//
// // ACCOUNT SID
// // AC37dd6729b9f94bd7c5e3c3acff3b722a
// // AUTH TOKEN
// // 84591b86dec6afd2dc8958bd751bb3f2
