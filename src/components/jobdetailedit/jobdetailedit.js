import React, { Component } from "react";
import Logout from "../logout";
import Settings from "../settings";
import Postjob from "../postjob";
import HomeButton from "../homebutton/homebutton";
import axios from "axios";
import { Link } from "react-router-dom";

// import algo from "../../images"




export default class JobDetailEdit extends Component {

    state = {
        loading: true,
        data: {},
        dataAvail: null
      }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:3500/jobs/' + this.props.match.params.jobId)
            .then(response => this.setState({ data: response.data, dataAvail: true}));
      }

     
    
    render() {
        
        const dataAvail = this.state.dataAvail;
        // let info;
        if (dataAvail){
            console.log(this.state.data)
            
        }
        return (
            <div class="container">
                
                <div class="row float-right mr-2 buttons">
                    <Logout />
                    
                </div>
                <h1 class="ml-5 pt-4 title"> Bolsa de Empleos "Tigre de Web"</h1>
                <hr />
                <div class="button row">
                    <div class="col-sm-6">
                        <div id="BackButton2">
                          <Link to="/editjobs">
                            <button type="button" id="back2btn-btn" class="btn btn-primary">Back</button>
                          </Link>
                        </div>
                    </div>
                    
                </div>
                <div class="card">
                    <div class="col-lg-12">
                        <div class="info">
                            <h2><i><b>{this.state.data.position}</b></i></h2>
                            <hr />
                            <h3><b>{this.state.data.company}</b></h3>
                            <i><h5>{this.state.data.location}</h5></i>
                            <br/>
                            <p>{this.state.data.description}</p>
                            <br />
                            <h5>C&oacute;mo Aplicar</h5>
                            <h6>Env&iacute;a tu CV: <a href={"mailto:" + this.state.data.email}> <b>{this.state.data.email}</b></a></h6>
                            <br/>
                                <a href={this.state.data.url}>{this.state.data.url}</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <img alt='hola' src={"/images/"+this.state.data.logo}></img>
                </div>
        </div>
        );
    }
}
