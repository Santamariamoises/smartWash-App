
import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Service from './Service.jsx';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address: '',
      updateResults: '',
      specialInd: '',
      time: '',
      userId: undefined,
      userName: undefined
    }
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSpecialInd = this.handleSpecialInd.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.add=this.add.bind(this);
    this.getUserInfo2 = this.getUserInfo2.bind(this);

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

  handleUpdateResults(e) {
    e.preventDefault();
    this.setState({updateResults: e.target.value})
  }

  handleSpecialInd(e) {
    e.preventDefault();
    this.setState({specialInd: e.target.value})
  }

getUserInfo2() {
 $.ajax({
   url: '/users/',
   method:'GET',
   success: (data) => {
    console.log(data, "awiwi");
    for ( var i = 0; i < data.length; i++){
      if (data[i].email === this.props.user.email){
        console.log("user found", data[i]);
        const usersInfo = data[i];
        this.setState({
          userId: usersInfo.id,
          userName: usersInfo.userName,
        })
      }
      console.log("user assigned");
    }
   },
   error:(xhr,err) => {
     console.log('la cagaste desde el fronts',err)
   }
 })
}


  addOrder(name, phone, address, cost, specialInd, updateResults){
   $.ajax({
     type: "POST",
     url: "/order",
     contentType: 'application/json',
     data: JSON.stringify({
       name: name,
       phone: phone,
       address: address,
       cost: cost,
       specialInd: specialInd,
       updateResults: updateResults
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
    this.addOrder(this.state.name, this.state.phone, this.state.address, this.state.updateResults, this.state.specialInd);
    this.setState({
      name: '',
      phone: '',
      address: '',
      cost: '',
      specialInd: '',
      updateResults: ''

    })
  }

  componentDidMount2(){
    getUserInfo();
//    console.log("form mounted")
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
        <span>Special indications:</span>
        <input type= 'text' className="catInput radius form-control form-control-md" placeholder="Enter Special Indications:" value={this.state.specialInd} onChange={this.handleSpecialInd}></input>
      </form>
      <Service
         />
      <button className="btn btn-primary mb-2" onClick={this.add}>Crear Orden</button>
      <Button bsStyle="info"><NavLink to ='/pickDay'>Ordenar ahora</NavLink></Button>
  </div>
);
  }
}

export default Form;
