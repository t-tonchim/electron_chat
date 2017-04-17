import { Link } from 'react-router';
import React from 'react';

export default class Login extends React.Component {
  render(){
    return(
      <div>
        <h2>Login</h2>
        <Link to="/rooms">Login</Link> <br />
        <Link to="/signup">Create new account</Link>
      </div>
    );
  }
}
