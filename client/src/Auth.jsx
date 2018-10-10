import React, { Component } from 'react';
import fire from "./components/fire.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/signUp.jsx"
import App from './index.jsx';
import Home from './userHome.jsx';
// import Login from './Login';


class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      account: undefined
    }
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div>
        <h1> SmartWash </h1>
     {this.state.user ?  ( <Home user={this.state.user}/>) : (<Login />)}
     </div>
)}
}

 export default Auth;
