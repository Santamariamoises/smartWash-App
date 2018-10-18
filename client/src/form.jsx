import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address: '',
      size: '',
      specialInd: '',
      service: '',
      times:''
    }
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleSpecialInd = this.handleSpecialInd.bind(this);
    this.handleService = this.handleService.bind(this);
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

  handleSize(e) {
    e.preventDefault();
    this.setState({size: e.target.value})
  }

  handleSpecialInd(e) {
    e.preventDefault();
    this.setState({specialInd: e.target.value})
  }

  handleService(e) {
    e.preventDefault();
    this.setState({service: e.target.value})
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
       size: size,
       specialInd: specialInd,
       service: service
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
      size: '',
      specialInd: '',
      service: ''
    })
  }


  render () {
    return (
    <div>

      <form>
        <span>Name:</span>
        <input  type= 'text' className="form" className="catInput radius form-control form-control-md" aria-describedby="name" placeholder="Enter Name:" value={this.state.name} onChange={this.handleName}></input>
      </form>

      <form>
        <span>Cellphone:</span>
        <input type= 'text' className="catInput radius form-control form-control-md" placeholder="Enter Number Cellphone:" value={this.state.phone} onChange={this.handlePhone}></input>
      </form>

      <form>
        <span>Address:</span>
        <input type= 'text' className="catInput radius form-control form-control-md" placeholder="Enter Address:" value={this.state.address} onChange={this.handleAddress}></input>
      </form>

      <form>
        <span>Size:</span>
        <select
        className="catInput radius form-control form-control-md"
        value={this.state.size}
        onChange={this.handleSize}
        type="select"
        >
          <option>1-3 kg</option>
          <option>3-5 Kg</option>
          <option>5-7 Kg</option>
        </select>
      </form>

      <form>
        <span>Special indications:</span>
        <input type= 'text' className="catInput radius form-control form-control-md" placeholder="Enter Special Indications:" value={this.state.specialInd} onChange={this.handleSpecialInd}></input>
      </form>

      <form>
        <span>Service:</span>
        <select
        className="catInput radius form-control form-control-md"
        value={this.state.service}
        onChange={this.handleService}
        type="select"
        >
          <option>Laundry</option>
          <option>Dry-clean</option>
          <option>Ironed and folded</option>
        </select>
        <button className="btn btn-primary mb-2" onClick={this.add}>Crear Orden</button>
      </form>

      <Button bsStyle="info"><NavLink to ='/pickDay'>Ordenar ahora</NavLink></Button>
    </div>);
  }
}

export default Form;
