import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   phone: '',
    //   address: '',
    //   size: '1-3 kg',
    //   specialInd: '',
    //   service: 'Laundry',
    //   time: '',
    // }
    // this.handleChange = this.handleChange.bind(this);
    // this.addOrder = this.addOrder.bind(this);
    // this.add = this.add.bind(this);
  }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  //
  //
  //
  // addOrder(name, phone, address, size, specialInd, service){
  //  $.ajax({
  //    type: "POST",
  //    url: "/order",
  //    contentType: 'application/json',
  //    data: JSON.stringify({
  //      name: name,
  //      phone: phone,
  //      address: address,
  //      size: size,
  //      specialInd: specialInd,
  //      service: service
  //    }),
  //    success:(data)=> {
  //    },
  //    error: (xhr,status,error) => {
  //      console.log(error);
  //    }
  //  });
  // }

  // add(event) {
  //   event.preventDefault();
  //   this.addOrder(this.state.name, this.state.phone, this.state.address, this.state.size, this.state.specialInd, this.state.service);
  //   this.setState({
  //     phone: '',
  //     address: '',
  //     size: '',
  //     specialInd: '',
  //     service: ''
  //   })
  // }

//   componentDidMount(){
//     //getUserInfo();
// //    console.log("form mounted")
//   }

  render () {
    return (
    <div>

      <form>
        <span>Cellphone:</span>
        <input type= 'text' name="phone"className="catInput radius form-control form-control-md" placeholder="Enter Number Cellphone:" value={this.props.state.phone} onChange={this.props.handleChange}></input>
      </form>

      <form>
        <span>Address:</span>
        <input type= 'text' name="address" className="catInput radius form-control form-control-md" placeholder="Enter Address:" value={this.props.state.address} onChange={this.props.handleChange}></input>
      </form>

      <form>
        <span>Size:</span>
        <select
        className="catInput radius form-control form-control-md"
        name="size"
        value={this.props.state.size}
        onChange={this.props.handleChange}
        type="select"
        >
          <option>1-3 kg</option>
          <option>3-5 Kg</option>
          <option>5-7 Kg</option>
        </select>
      </form>

      <form>
        <span>Special indications:</span>
        <input type='text' name="specialInd" className="catInput radius form-control form-control-md" placeholder="Enter Special Indications:" value={this.props.state.specialInd} onChange={this.props.handleChange}></input>
      </form>

      <form>
        <span>Service:</span>
        <select
        className="catInput radius form-control form-control-md"
        name="service"
        value={this.props.state.service}
        onChange={this.props.handleChange}
        type="select"
        >
          <option>Laundry</option>
          <option>Dry-clean</option>
          <option>Ironed and folded</option>
        </select>
      </form>
        <br></br>
      <button className="btn btn-info"><NavLink to ='/pickDay'>Ordenar ahora</NavLink></button>
    </div>);
  }
}

export default Form;
