import React, { Component } from 'react';
import fire from './components/fire.jsx';
import Status from './components/status.jsx'

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
               <button onClick={this.logout}>Logout</button>
               <Status />
            </div>
        );
    }
}

export default Home;
