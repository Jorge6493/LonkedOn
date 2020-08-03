import React from "react";
import './login.css';
import axios from "axios";
import Home from "../home";
import { Link } from "react-router-dom";

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            valid: false,
            type_of_user: ""
        }
        this.user_id = "";
        this.teststate = {
            username: "franz",
            password: "1234",
            type_of_user: "Poster"
        }
    }

    postContent() {
        axios.post("http://localhost:3500/users/login", {
            username: this.state.username,
            password: this.state.password
        }).then((response) => {
            if (response.data === "") {
                alert("Incorrect Username or Password");
                this.setState({
                    username: "",
                    password: "",
                    valid: false
                })
            }

            else {
                this.user_id = response.data;
                this.props.changeUserData(this.teststate);
                this.setState({
                    username: "",
                    password: "",
                    valid: true
                })
                this.props.history.push('/home');
            }
        })
    }
    
    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    };

    render() {
        if (!this.state.valid){
            return (
                <div class="container">
                    <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
                    <hr />
                    <div class="center">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" placeholder="Enter username" id="username" value={this.state.username} onChange={event => this.handleChange(event, "username")} />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="password" value={this.state.password} onChange={event => this.handleChange(event, "password")} />
                        </div>
                    </div>
                    <div id="CreateUserButton">
                        <Link to="/createuser">
                            <button type="button" id="createuserbtn-btn" class="btn btn-primary">Create User</button>
                        </Link>
                    </div>
                    <br/>
                    <button class="btn btn-primary" onClick={this.postContent.bind(this)}>Submit</button>
                </div>
            );
        } else {
            return (
                <Home/>
            );
        }
    }
}