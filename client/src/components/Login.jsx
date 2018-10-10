import React, { Component } from 'react';
import fire from './fire.jsx';
import SignUp from './signUp.jsx';
import ExistingLogIn from './ExistingLogIn.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.hasAccount = this.hasAccount.bind(this);
    this.noAccount = this.noAccount.bind(this);
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

  hasAccount(){
    console.log("has account");
    this.setState({
      account: true
    })
  }

  noAccount(){
    console.log("no account");
    this.setState({
      account: false
    })
  }

  render() {
    return (
      <div>
       <button onClick={this.hasAccount}> ya tengo cuenta</button>
       <button onClick={this.noAccount}> crear una cuenta nueva</button>
        <div>
        { this.state.account ?
          < ExistingLogIn /> :
          <SignUp />
        }
        </div>
      </div>
    );
  }
}
export default Login;
