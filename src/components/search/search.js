import React, { Component } from 'react';

import Postjob from '../postjob'
import Settings from '../settings'
import Logout from '../logout'
import Table from '../table'
import HomeButton from '../homebutton/homebutton';

class Search extends Component {
  render() {
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
            <HomeButton />
          </div>
          <div class="input-group col-sm-2 ml-auto">
            <Postjob />
          </div>
        </div>
        <br />
        <div class="container">
          <Table jobId="4" size='20' />
        </div>
      </div>
    );
  }
}

export default Search;
