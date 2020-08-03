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
                <div class="row float-right mr-2 buttons">
                    <Logout />
                    <Settings />
                </div>
                <h1 class="ml-5 pt-4 title"> Bolsa de Empleos "Tigre de Web"</h1>
                <hr />
                <div class="button row clearfix">
                    <div class="col-sm-6">
                        <HomeButton />
                    </div>
                    <div class="col-sm-2 ml-auto">
                        <Postjob />
                    </div>
                </div>
                <br/>
                <Table jobId="4" size="20"/>
            </div>
          
          );
      }
}

export default Home;

