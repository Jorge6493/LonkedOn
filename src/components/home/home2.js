import React, { Component } from 'react';
import Search from '../search'
import Postjob from '../postjob'
import Settings from '../settings'
import Logout from '../logout'
import Table from '../table'

import './home.css'

class Home extends Component {
  render() {
    return(
      <div className="App">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-8">
            <h1>Bolsa de empleos "Tigre de Web"</h1>
          </div>
          <div class="col-4">
            <div class="container">
              <div class="row">
                <Logout/>
                <Settings/>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        
        </div>
        <div class="row justify-content-around">
          <div class="col-4">
            <Search/>
          </div>
          <div class="col-4">
            <Postjob/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Table />
          </div>
          
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
