import Errors from './Errors';
import { Link, hashHistory } from 'react-router';
import React from 'react';
import firebase from 'firebase/firebase-browser';

const SIGNUP_FORM_STYLE = {
  margin: "0 auto",
  padding: 30
};

const CANCEL_BUTTON_STYLE = {
  marginLeft: 10
};

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      photoURL: "",
      errors: []
    };
  }

  handleOnChangeEmail(e){
    this.setState({ email: e.target.value });
  }

  handleOnChangePassword(e){
    this.setState({ password: e.target.value });
  }

  handleOnChangName(e){
    this.setState({ name: e.target.value });
  }

  handleOnChangePhotoURL(e){
    this.setState({ photoURL: e.target.value });
  }
  handleOnSubmit(e){
    const { email, password, name, photoURL } = this.state;
    const errors = [];
    let isValid = true;
    e.preventDefault();
    if(!email.length){
      isValid = false;
      errors.push("Email address cann't be blank");
    }
    if(!password.length){
      isValid = false;
      errors.push("Password cann't be blank");
    }
    if(!name.length){
      isValid = false;
      errors.push("Name cann't be blank");
    }
    if(!isValid){
      this.setState({ errors });
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(newUser => {
      return newUser.updateProfile({
        displayName: name,
        photoURL
      });
    }).then(() => {
      hashHistory.push("/rooms");
    }).catch(err => {
      this.setState({ errors: [err.message] })
    });
  }

  render(){
    return(
      <form stye={SIGNUP_FORM_STYLE} onSubmit={::this.handleOnSubmit}>
      <Errors errorMessages={this.state.errors} />
      <div className="form-group">
        <label>Email address</label>
        <input className="form-control" type="email" placeholder="email" value={this.state.email} onChange={::this.handleOnChangeEmail} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input className="form-control" type="password" placeholder="password" value={this.state.password} onChange={::this.handleOnChangePassword} />
      </div>
      <div className="form-group">
        <label>User name</label>
        <input className="form-control" type="text" placeholder="user name" value={this.state.name} onChange={::this.handleOnChangName} />
      </div>
      <div className="form-group">
        <label>Photo URL</label>
        <input className="form-control" type="text" placeholder="photo URL" value={this.state.photoURL} onChange={::this.handleOnChangePhotoURL} />
      </div>
      <div className="form-group">
        <button className="btn btn-large btn-primary">Create new account</button>
        <Link to="/login">
          <button className="btn btn-large btn-default" type="button" style={CANCEL_BUTTON_STYLE}>Cancel</button>
        </Link>
      </div>
      </form>
    );
  }
}
