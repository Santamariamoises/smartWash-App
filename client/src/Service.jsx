import React, { Component } from 'react';
import Results from './components/results.js';
import InputRadio from './components/input_radio.js';
import { calculate_shipping } from './components/main.js';

class Service extends Component {

  constructor(props) {
    super(props);
    this.state = {
      service_Date: '5',
      weight_kg: '0',
      pickUp_date: '',
      deliveryDate: '',
      cost: '0'
    };
    this.updateResults = this.updateResults.bind(this);
  }



  updateResults(e, type) {
    const current_weight = (type === 'weight') ? e.target.value : this.state.weight_kg;
    const current_speed = (type === 'speed') ? e.target.value : this.state.service_speed;

    const {
      weight_kg,
      service_speed,
      pickUp_date,
      deliveryDate,
      cost
    } = calculate_shipping(current_weight, current_speed);

    this.setState({
      service_speed: service_speed,
      weight_kg: weight_kg,
      weight_ozs: weight_ozs,
      pickUp_date: pickUp_date,
      deliveryDate: deliveryDate,
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
          All shipments are subject to reweigh on delivery to LaundryMat.
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
          <ul id="radio_buttons" className="custom-control custom-radio">
            <h1 className="font-weight-bold d-block p-2 bg-primary text-black">Economic $80 PerKg plus Tax</h1>
            <br></br>
            <InputRadio updateResults={this.updateResults} service_speed={this.state.service_speed} days="5" />
            <br></br>
            <h1 className="font-weight-bold d-block p-2 bg-primary text-black">Standard $100 PerKg plus Tax</h1>
            <br></br>
            <InputRadio updateResults={this.updateResults} service_speed={this.state.service_speed} days="3" />
            <br></br>
            <h1 className="font-weight-bold d-block p-2 bg-primary text-black">Express $120 PerKg plus Tax</h1>
            <br></br>
            <InputRadio updateResults={this.updateResults} service_speed={this.state.service_speed} days="2" />
          </ul>
        </form>
        <Results details={this.state}/>
      </section>
    );
  }
}

export default Service;


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
