import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

render(){
  return (
    <div>
    <nav className="headerStyle">
          <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/registro'>Mi cuenta</NavLink>
          <NavLink to='/PlaceOrder'>PlaceOrder</NavLink>
          </ul>
    </nav>
    </div>
  )
}
}

export default Navigation;
