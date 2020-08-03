import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Postjob extends Component {
  render() {
    return (
        <div id="Postjob" class="ml-auto">
            <Link to="/postjob">
                    <button type="button" id="postjob-btn" class="btn btn-primary">Post a Job</button>
            </Link>
        </div>
    );
  }
}

export default Postjob;
