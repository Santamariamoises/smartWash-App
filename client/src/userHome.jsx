import React, { Component } from 'react';
import fire from './components/fire.jsx';
import Login from "./components/Login.jsx";
import Link from 'react-router-dom';
import PlaceOrder from './PlaceOrder.jsx';
import Auth from './Auth.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status : undefined
        }
        this.logout = this.logout.bind(this);
    }


    componentDidMount(){
      this.setState({
        status: "secándose"
      })
    }

    logout() {
        fire.auth().signOut();
    }

    Order(){
      alert("ahora vamos a ordenar")
    }

    render() {
        return (
          <div>
          <img src={"/clothes.png"} />
          <p> logged to {this.props.user.email}
          <button onClick={this.logout}>Logout</button>
          </p>

          <button onClick={this.Order}> ordena ahora</button>
          <h2> My laundry status </h2>
          <PlaceOrder />
          </div>


        );
    }
}


export default Home;
