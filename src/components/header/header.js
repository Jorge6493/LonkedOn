import React, { Component } from 'react';
// import Search from '../search'
import Postjob from '../postjob'
import Settings from '../settings'
import Logout from '../logout'
import Table from '../table'
// import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';

import './header.css'

class Header extends Component {

  render() {
    // const { params: { jobsId } } = match;
    // console.log(jobsId);
    // console.log(this.props.match.params.jobId)

    return (
      <div class="container">
        <div class="row float-right mr-2">
          <Logout />
          <Settings />
        </div>
        <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
        <br />
        <div class="row">
          <div class="input-group col-sm-6 ml-3">

          </div>
          <div class="input-group col-sm-2 ml-auto">
            <div id="Postjob">
              <button type="button" id="postjob-btn" class="btn btn-primary">Post a Job</button>
            </div>
          </div>
        </div>
        <br />
        <div class="container">
          <Table jobId={this.props.match.params.jobId} size='10' />
        </div>
      </div>

    );
  }
}

export default Header;
