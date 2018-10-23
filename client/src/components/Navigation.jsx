import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import Stepper from './components/Stepper.jsx';
class Navigation extends React.Component {

render () {
    return (
      <div>
      <nav className="navbar is-info">
      <div className="container">
      <div className="navbar-brand">
      <a className="navbar-item" href="/">Smart Wash</a>
      <span className="navbar-burger burger" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
      </span>
      </div>
      <div id="navbar-end" className="navbar-menu">
      <div className="navbar-item">
      <NavLink to="/registro">Mi Cuenta</NavLink>
      <NavLink to="/pickDay">Order</NavLink>
      <NavLink to="/Stepper">Steps</NavLink>
      </div>
      </div>
      </div>
      </nav>
      </div>)
  }
}

export default Navigation;
