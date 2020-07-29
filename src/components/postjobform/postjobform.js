import React from "react";
import './postjobform.css';
import Logout from "../logout";
import Settings from "../settings";
import Postjob from "../postjob/postjob";
import HomeButton from "../homebutton/homebutton";

export default class PostJobForm extends React.Component {
    state = {
        category: "Designer",
        tipo: "",
        compania: "",
        logo: null,
        email: "",
        url: "",
        position: "",
        location: "",
        desc: ""
    }
    
    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    };

    handleLogo = event => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    };

    async func(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category: "Designer",
        tipo: "",
        compania: "",
        logo: null,
        email: "",
        url: "",
        position: "",
        location: "",
        desc: ""
            })
        };
          console.log('hola')
    const url = "http://localhost:3500/jobs";
    const response = await fetch(url,requestOptions);
    const data = await response.json();
    // this.setState({data: data, loading: false});
    // console.log(this.state.data);
    // console.log(response)
    // console.log(data[0].category)
    }

    handleSubmit = event =>{
        console.log('thisstate');
        console.log(this.state)
        // const result = await fetch("localhost:3500/jobs",{method:'POST', body:this.state, headers: { 'Content-Type': 'application/json' }})
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: this.state
        };
        fetch('localhost:3500/jobs', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ 
                compania: data.compania,

             },
             console.log(data)));
    }

    render() {
        return (
            <div class="container">    
                <div class="row float-right mr-2">
                    <Logout />
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
                    <label for="categoria">Category</label>
                    <select for="categoria" class="form-control" id="categoria" value={this.state.category} onChange={event => this.handleChange(event, "category")}>
                        <option selected disabled>Choose a category</option>
                        <option value="designer">Designer</option>
                        <option value="developer">Developer</option>
                        <option value="lead">Lead Developer</option>
                        <option value="artist">Artistoption</option>
                        <option value="director">Director</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="tipo">Type</label><tab></tab>
                    <input type="text" class="form-control" placeholder="i.e.:        full-time, part-time, etc." id="tipo" value={this.state.tipo} onChange={event => this.handleChange(event, "tipo")}/>
                </div>
                <div class="form-group">
                    <label for="compania">Company</label><tab></tab>
                    <input type="text" class="form-control"placeholder="Enter company name" id="compania" value={this.state.compania} onChange={event => this.handleChange(event, "compania")}/>
                </div>
                <div class="form-group">
                    <label for="logo">Logo</label>
                    <input type="file" class="form-control" id="logo" onChange={this.handleLogo}/>
                </div>
                <div class="form-group">
                    <label for="email">Contact Email</label><tab></tab>
                    <input type="text"  class="form-control"placeholder="Enter contact email address" id="email" value={this.state.email} onChange={event => this.handleChange(event, "email")}/>
                </div>
                <div class="form-group">
                    <label for="url">URL</label><tab></tab>
                    <input type="text"  class="form-control"placeholder="Enter company webpage" id="url" value={this.state.url} onChange={event => this.handleChange(event, "url")}/>
                </div>
                <div class="form-group">
                    <label for="position">Position</label><tab></tab>
                    <input type="text" class="form-control"placeholder="Enter available position" id="position" value={this.state.position} onChange={event => this.handleChange(event, "position")}/>
                </div>
                <div class="form-group">
                    <label for="location">Location</label><tab></tab>
                    <input type="text" class="form-control" placeholder="Enter company location" id="location" value={this.state.location} onChange={event => this.handleChange(event, "location")}/>
                </div>
                <div class="form-group">
                    <label for="desc">Description</label><tab></tab>
                    <textarea id="desc" class="form-control" placeholder="Enter job description" rows="4" value={this.state.desc} onChange={event => this.handleChange(event, "desc")}></textarea>
                </div>
                <button onClick={this.func}>Submit</button>
            </div>    
        );
    }
}
    
