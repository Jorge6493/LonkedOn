import React from 'react';
import { Link } from 'react-router-dom';


export default class Back2Login extends React.Component {
  render() {
    return (
      <div id="Back2Login">
        <Link to="/">
          <button type="button" id="backbtn-btn" class="btn btn-primary">Go Back</button>
        </Link>
      </div>
    );
  }
}
