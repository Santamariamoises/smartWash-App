import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/registro" className="navbar-item">Order</Link>
      </div>
      </div>
      </div>
      </nav>
      </div>)
  }
}

export default Navigation;
