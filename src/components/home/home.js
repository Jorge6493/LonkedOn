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
            <div class="container">
            <div class="row float-right mr-2">
                <Logout/>
                <Settings/>
            </div>
            <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
            <br/>
            <div class="row">
                <div class="input-group col-sm-6 ml-3">
                    <Search/>               
                </div> 
                <div class="input-group col-sm-2 ml-auto">
                    <Postjob/>
                </div>
            </div>
            <br/>
            <div class="container">
                <Table name="Design"/>
            </div>
            <br/>
            <div class="container">
                <Table name="Programming"/>
            </div>
            <br/>
            <div class="container">
                <Table name="QA Engineer"/>
            </div>
            </div>
          
          );
      }
}

export default Home;

