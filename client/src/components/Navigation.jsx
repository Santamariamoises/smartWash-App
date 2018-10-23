import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

render () {
    return (
      <div>
      <nav className="navbar is-info">
      <div className="container">
      <div className="navbar-brand">
      <a className="navbar-item" href="/">Smart Wash </a>
      <span className="navbar-burger burger" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
      </span>
      </div>
      <div id="navbar-end" className="navbar-menu">
      <div className="navbar-item">
      <Link to="/registro" className="order" className="navbar-item" className="text-white">Order</Link>
      </div>
      </div>
      </div>
      </nav>
      </div>
    )
  }
}

export default Navigation;
