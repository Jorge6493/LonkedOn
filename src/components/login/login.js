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
            // console.log('response')
            // console.log(response)
            if (response.data === "") {
                alert("Incorrect Username or Password");
                this.setState({
                    username: "",
                    password: "",
                    valid: false,
                    type_of_user: ""
                })
            }

            else {
                this.user_id = response.data;
                console.log('userid')
                // console.log(response.data)
                axios.get("http://localhost:3500/users/"+ response.data).then(
                    response => {
                        console.log('response')
                            console.log(response)
                        this.setState({ 
                            username: response.data.username,
                            password: response.data.password,
                            type_of_user: response.data.type_of_user })
                       
                            this.props.changeUserData(this.state);
                            
                            this.setState({
                                username: "",
                                password: "",
                                valid: true,
                                type_of_user: ""
                            })
                            this.props.history.push('/home');
                            
                        }
                    )
                
             
               
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
                    
                    <div class="row">
                        <button class="btn btn-primary" onClick={this.postContent.bind(this)}>Submit</button>
                        <div id="CreateUserButton" class="ml-auto">
                            <Link to="/createuser">
                                <button type="button" id="createuserbtn-btn" class="btn btn-primary">Create User</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            );
        } else {
            return (
                <Home user={this.state}/>
            );
        }
    }
}