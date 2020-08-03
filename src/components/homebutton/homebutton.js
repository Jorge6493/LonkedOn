import React from 'react';
import { Link } from 'react-router-dom';


export default class HomeButton extends React.Component {
  render() {
    return (
      <div id="HomeButton">
        <Link to="/home">
          <button type="button" id="homebtn-btn" class="btn btn-primary">Home</button>
        </Link>
      </div>
    );
  }
}
