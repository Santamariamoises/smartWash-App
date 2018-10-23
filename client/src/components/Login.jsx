import React, { Component } from 'react';
import fire from './fire.jsx';
import SignUp from './signUp.jsx';
import ExistingLogIn from './ExistingLogIn.jsx';
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.hasAccount = this.hasAccount.bind(this);
    this.noAccount = this.noAccount.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.state = {
      account: undefined,
      email: '',
      password: '',
      userName: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUserName(e){
    e.preventDefault();
    this.setState({
      userName: e.target.value
    });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        alert("¡Contraseña o usuario incorrecto! Intenta nuevamente")
      });
  }

  createUser(email, userName){
    $.ajax({
   url:'/users',
   type: "POST",
   contentType: 'application/json',
   data: JSON.stringify({
     email: email,
     userName: userName,
   }),
   success:(data)=> {
     console.log("you peel me")
   },
   error: (xhr,status,error) => {
     console.log(error);
   }
 });
  }

  signup(e){
    e.preventDefault();
    this.createUser(this.state.email, this.state.userName);
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        alert("error")
      })
  }

  hasAccount(){
    console.log("has account");
    this.setState({
      account: true
    })
  }

  noAccount(){
    console.log("no account");
    this.setState({
      account: false
    })
  }

  render() {
    return (
      <div>
       <button onClick={this.hasAccount} className="btn btn-info"> ya tengo cuenta</button>
       <button onClick={this.noAccount} className="btn btn-primary"> crear una cuenta nueva</button>
        <div>
        { this.state.account === undefined ?
          <p> ¿Tienes cuenta con Smart Wash?</p> :
          this.state.account ?
          < ExistingLogIn state={this.state} handleChange={this.handleChange} login={this.login}/> :
          <SignUp state={this.state} signup={this.signup} handleChange={this.handleChange} handleUserName={this.handleUserName}/>
        }
        </div>
      </div>
    );
  }
}
export default Login;
