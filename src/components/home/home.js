import React, { Component } from 'react';

import Postjob from '../postjob'
import Settings from '../settings'
import Logout from '../logout'
import Table from '../table'
import HomeButton from "../homebutton/homebutton";

import './home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div class="container">
            <div class="row float-right mr-2">
                <Logout/>
                <Settings/>
            </div>
            <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
            <br/>
            <div class="row">
            <div class="input-group col-sm-2 ml-auto">
            <HomeButton />
          </div>
          <div class="input-group col-sm-2 ml-auto">
          <Link to="/search">
          <button type="button" id="search-btn" class="btn btn-primary">Search</button>
        </Link>
          </div>
                <div class="input-group col-sm-2 ml-auto">
                    <Postjob/>
                </div>
            </div>
            <br/>
            <div class="container">
                <Table jobId="4" size="20"/>
            </div>
            {/* <br/>
            <div class="container">
                <Table jobId="2" size="10"/>
            </div>
            <br/>
            <div class="container">
                <Table jobId="3" size="10"/>
            </div> */}
            </div>
          
          );
      }
}

export default Home;

