import React, { Component } from 'react';
import fire from './components/fire.jsx';
import Status from './components/status.jsx'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
// import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status : undefined,
          userId: undefined,
          userName: undefined,
        }
        this.logout = this.logout.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    getUserInfo() {
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

    componentDidMount(){
      this.getUserInfo();
      console.log("component mounted")
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
          <div>
            <img src={"/clothes.png"} />
            <p> logged to {this.props.user.email}
            <Button onClick={this.logout}>Logout</Button>
            <button><NavLink to='/Form'>Place Order</NavLink></button>
            </p>
            <h2> My laundry status </h2>
            <Status status={this.state.status}/>
          </div>


        );
    }
}


export default Home;
