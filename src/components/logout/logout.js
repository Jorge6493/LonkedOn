import React, { Component } from 'react';
import './logout.css';
import { Link } from 'react-router-dom';

class Logout extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <span class="logout">
            <i class="fas fa-sign-out-alt"></i>
          </span>
        </Link>
      </div>
    );
  }
}

export default Logout;
