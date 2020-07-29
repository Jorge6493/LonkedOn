import React from "react";
import './login.css';
import Settings from "../settings";
import Postjob from "../postjob/postjob";
import HomeButton from "../homebutton/homebutton";
import axios from "axios";

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    postContent() {
        axios.post("http://localhost:3500/users", {
            username: this.state.username,
            password: this.state.password
        }).then(this.setState({
            username: "",
            password: ""
        }))
    }
    
    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    };

    render() {
        return (
            <div class="container">    
                <div class="row float-right">
                    <Settings />
                </div>
                <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
                <br />
                <div class="row">
                    <div class="input-group col-sm-6">
                        <HomeButton />
                    </div>
                    <div class="input-group col-sm-2 ml-auto">
                        <Postjob />
                    </div>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" placeholder="Enter username" id="username" value={this.state.username} onChange={event => this.handleChange(event, "username")}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"  class="form-control"placeholder="Enter password" id="password" value={this.state.password} onChange={event => this.handleChange(event, "password")}/>
                </div>
                <button onClick={this.postContent.bind(this)}>Submit</button>
            </div>    
        );
    }
}