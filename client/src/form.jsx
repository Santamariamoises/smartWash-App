import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Status from './Status.jsx';
import Map from './components/map.jsx';
import Payment from './components/payment.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address: '',
      specialInd: '',
      times:''
    }
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSpecialInd = this.handleSpecialInd.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.add=this.add.bind(this);

  }

  handleName(e) {
    e.preventDefault();
    this.setState({name: e.target.value})
  }

  handlePhone(e) {
    e.preventDefault();
    this.setState({phone: e.target.value})
  }

  handleAddress(e) {
    e.preventDefault();
    this.setState({address: e.target.value})
  }

  handleSpecialInd(e) {
    e.preventDefault();
    this.setState({specialInd: e.target.value})
  }

  addOrder(name, phone, address, size, specialInd, service){
   $.ajax({
     type: "POST",
     url: "/order",
     contentType: 'application/json',
     data: JSON.stringify({
       name: name,
       phone: phone,
       address: address,
       shipping_speed: shipping_speed,
       weight_kg: weight_kg,
       specialInd: specialInd,
       departure_date: departure_date,
       arrival_date: arrival_date,
       cost: cost
     }),
     success:(data)=> {
     },
     error: (xhr,status,error) => {
       console.log(error);
     }
   });
  }

  add(event) {
    event.preventDefault();
    this.addOrder(this.state.name, this.state.phone, this.state.address, this.state.size, this.state.specialInd, this.state.service);
    this.setState({
      name: '',
      phone: '',
      address: '',
      specialInd: ''

    })
  }


  render () {
    return (
    <div>

      <form>
        <h5><p class="font-weight-bold d-block p-2 bg-primary text-black">Name:</p></h5>
        <input  type= 'text' className="form" className="catInput radius form-control form-control-md" aria-describedby="name" placeholder="Enter Name:" value={this.state.name} onChange={this.handleName}></input>
      </form>

      <form>
        <h5><p className="font-weight-bold d-block p-2 bg-primary text-black">Cellphone:</p></h5>
        <input type= 'text' className="catInput radius form-control form-control-md" placeholder="Enter Number Cellphone:" value={this.state.phone} onChange={this.handlePhone}></input>
      </form>

      <form>
        <h5><p className="font-weight-bold d-block p-2 bg-primary text-black">Address:</p></h5>
        <input type= 'text' className="catInput radius form-control form-control-md" placeholder="Enter Address:" value={this.state.address} onChange={this.handleAddress}></input>
      </form>

      <form>
        <h5><p className="font-weight-bold d-block p-2 bg-primary text-black">Special indications:</p></h5>
        <input type= 'text' className="catInput radius form-control form-control-md" placeholder="Enter Special Indications:" value={this.state.specialInd} onChange={this.handleSpecialInd}></input>
      </form>
      <Status />
      <Map />
        <Payment />
      <button className="btn btn-primary mb-2" onClick={this.add}>Crear Orden</button>
    </div>);
  }
}

export default Form;
