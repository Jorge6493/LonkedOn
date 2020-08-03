import React, { Component } from 'react';

import Postjob from '../postjob'
import Settings from '../settings'
import Logout from '../logout'
import Table from '../table'

import './home.css';

class Home extends Component {
    render() {
        let settings
        let poster
        console.log('props')
        console.log(this.props)
        if(this.props.type_of_user == "admin"){

            settings = <Settings />
        }
        if(this.props.type_of_user == "Poster"){
            poster = <Postjob />

        } 
        return (
            <div class="container">
                <div class="row float-right mr-2 buttons"> 
                    <Logout />
                    {settings}
                </div>
                <h1 class="ml-5 pt-4 title"> Bolsa de Empleos "Tigre de Web"</h1>
                <hr />
                <div class="button row clearfix">
                    <div class="col-sm-2 ml-auto">
                        {poster}
                    </div>
                </div>
                <br />
                <Table jobId="4" size="20" />
            </div>

        );
    }
}

export default Home;

