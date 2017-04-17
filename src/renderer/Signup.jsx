import { Link } from 'react-router';
import React from 'react';

export default class Signup extends React.Component {
  render(){
    return(
      <div>
        <h2>Signuu</h2>
        <Link to="/rooms">Create new account</Link>
        <Link to="/login">cannel</Link>
      </div>
    );
  }
}
