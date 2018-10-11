import React, { Component } from 'react';
import fire from './fire.jsx';
import SignUp from './signUp.jsx';

class ExistingLogIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <center><div id= "content" className="col-md-6">
       <div>
       <form>

      <div className="form-group">
       <label htmlFor="exampleInputEmail1"></label>
       <input value={this.props.state.email} onChange={this.props.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
       <small id="emailHelp" className="form-text text-muted"></small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1"></label>
      <input value={this.props.state.password} onChange={this.props.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.props.login} className="btn btn-primary">Sign in</button>

 </form>
</div>
 </div></center>
    );
  }
}
export default ExistingLogIn;
