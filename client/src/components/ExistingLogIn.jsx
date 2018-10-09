import React, { Component } from 'react';
import fire from './fire.jsx';
import SignUp from './signUp.jsx';

class ExistingLogIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      account: undefined,
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        alert("¡Contraseña o usuario incorrecto! Intenta nuevamente")
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        alert("Usuario creado")
      })
  }
  render() {
    return (
       <center><div id= "content" className="col-md-6">
       <div>
       <form>

      <div className="form-group">
       <label htmlFor="exampleInputEmail1"></label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
       <small id="emailHelp" className="form-text text-muted"></small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1"></label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Sign in</button>

 </form>
</div>
 </div></center>
    );
  }
}
export default ExistingLogIn;
