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
    <nav class="navbar-dark default-color lighten-4">
      <form class="form-inline">
      <ul class="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
      <button class="btn btn-elegant" type="button"><NavLink to='/'>Home</NavLink></button>
      </ul>
      <ul class="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
      <button class="btn btn-elegant" type="button"><NavLink to='/registro'>Mi cuenta</NavLink></button>
      </ul>
      <ul class="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
      <button class="btn btn-elegant" type="button"><NavLink to='/Form'>Place Order</NavLink></button>
      </ul>
      <ul class="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
      <button class="btn btn-elegant" type="button"><NavLink to ='/pickDay'>pickDay</NavLink></button>
      </ul>
      <ul class="nav md-tabs light-blue lighten-1 mx-0 mb-0 mt-1">
      <button class="btn btn-elegant" type="button"><NavLink to ='/checkout'>checkout</NavLink></button>
      </ul>
    </form>
    </nav>
    </div>
  )
}
}

export default Navigation;
