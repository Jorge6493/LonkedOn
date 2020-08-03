import React from "react";
import './createuser.css';
import Back2Login from '../back2loginbutton/back2login.js';
import axios from "axios";

export default class CreateUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            type_of_user: "admin"
        }
    }

    postContent() {
        axios.post("http://localhost:3500/users", {
            username: this.state.username,
            password: this.state.password, 
            type_of_user: this.state.type_of_user 
        }).then(this.setState({
            username: "",
            password: "",
            type_of_user: ""
        }));
        this.props.history.push('/');
    }
    
    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    };

    render() {
        return (
            <div class="container">
                <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
                <br />
                <div class="row">
                    <div class="input-group col-sm-6">
                        <Back2Login />
                    </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" placeholder="Enter username" id="username" value={this.state.username} onChange={event => this.handleChange(event, "username")}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"  class="form-control"placeholder="Enter password" id="url" value={this.state.password} onChange={event => this.handleChange(event, "password")}/>
                </div>
                <div class="form-group">
                    <label for="type_of_user">Type of User</label>
                    <select for="categoria" class="form-control" id="type_of_user" value={this.state.type_of_user} onChange={event => this.handleChange(event, "type_of_user")}>
                        <option value="admin" selected>Administrator</option>
                        <option value="user">User</option>
                        <option value="poster">Poster</option>
                    </select>
                </div>
                </div>
                <button class="btn btn-primary" onClick={this.postContent.bind(this)}>Submit</button>
            </div>    
        );
    }
}