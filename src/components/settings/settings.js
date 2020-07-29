import React, { Component } from 'react';
import './settings.css'
import { Link } from 'react-router-dom';

class Settings extends Component {
  render() {
    return (
      <div>
        <Link to="/settings">
          <span class="gear">
            <i class="fa fa-cog"></i>
          </span>
        </Link>
        
      </div>
    );
  }
}

export default Settings;
