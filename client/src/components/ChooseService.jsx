import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class ChooseService extends React.Component {
  constructor(props) {
    super(props);

    this.handleChooseServiceClick = this.handleChooseServiceClick.bind(this);
  }

  handleChooseServiceClick(e) {
    this.props.onChooseServiceClick(e);
  }


  render() {
    return (
      <div className="choose-service">
        <div className="container">
          <h1>Choose Service Type: {this.props.service} chosen</h1>
          <div>

        <div className="cards">
        <div className={this.props.service === 'economy' ? "card-selected" : "card"} onClick={(e) => this.handleChooseServiceClick("economy", e)}>
        <header><button>Economy</button></header>
        <div className="price-container">
        <div className="price" >$80Pesos</div>
        </div>

        <div className={this.props.service === 'standard' ? "card-selected" : "card"}onClick={(e) => this.handleChooseServiceClick("standard", e)}>
        <header><button>Standard</button></header>
        <div className="price-container">
        <div className="price" >$110Pesos</div>
        </div>

        <div className={this.props.service === 'express' ? "card-selected" : "card"}  onClick={(e) => this.handleChooseServiceClick("express", e)}>
        <header><button>Express</button></header>
        <div className="price-container">
        <div className="price" >$160Pesos</div>
        </div>
        
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default ChooseService;
