import React, { Component } from "react";
import "./jobdetail.css";
import Logout from "../logout";
import Settings from "../settings";
import Postjob from "../postjob";
import HomeButton from "../homebutton/homebutton";
import axios from "axios";

export default class JobDetail extends Component {

    state = {
        loading: true,
        data: {},
        dataAvail: null
      }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:3500/jobs/'+this.props.match.params.jobId)
          .then(response => this.setState({ data: response.data, dataAvail: true }));
      }

     
    
    render() {
        const dataAvail = this.state.dataAvail;
        // let info;
        if (dataAvail){
            console.log(this.state.data)
            
        }
        return (
            <div class="container">
                <div class="row float-right mr-2">
                    <Logout/>
                    <Settings/>
                </div>
                <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
                <br/>
                <div class="row">
                    <div class="input-group col-sm-6">
                        <HomeButton />
                    </div> 
                    <div class="input-group col-sm-2 ml-auto">
                        <Postjob/>
                    </div>
                </div>
                <br/>
                <div class="row">
                <div class="col-sm-9">
        <h3>{this.state.data.company}</h3>
        <h5>{this.state.data.location}</h5>
        <hr/>
        <h5>{this.state.data.position}</h5>
        <hr/>
        <p>{this.state.data.description}</p>
        <br/>
        <h5>How to apply</h5>
        <br/>
        <p>Send your resume at {this.state.data.email}</p>
        <p>{this.state.data.url}</p>
    </div>
    <div class="col-sm-3">
        <img alt='hola' src="https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._SY500_.jpg"></img>
    </div>
                </div>
            </div>            
        );
    }
}
