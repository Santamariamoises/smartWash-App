import React, { Component } from 'react';
import fire from "./components/fire.jsx";
import Login from "./components/Login.jsx";
import App from './index.jsx';
import Home from './home.jsx';
// import Login from './Login';


class Auth extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
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
<<<<<<< 9f2f45c4f35c17fa176e8c73b98fd35999c5b22c
     {this.state.user ?  ( <Home user={this.state.user}/>) : (<Login />)}
=======
     <h1> SmartWash </h1>
     {this.state.user ?  ( <Home />) : (<Login />)}
>>>>>>> bit of styling
     </div>
)}
}

 export default Auth;
