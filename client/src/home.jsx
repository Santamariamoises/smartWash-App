import React, { Component } from 'react';
import fire from './components/fire.jsx';

import Status from './components/status.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
          <div>
            <div>
               <button onClick={this.logout}>Logout</button>
            </div>
            <h1> Welcome, random customer!</h1>
            <p> My laundry status </p>
            <Status />
          </div>
        );
    }
}

export default Home;
