import React from "react";
import './casoDeUso5.component.css';

export default class CdU5 extends React.Component {
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

    render() {
        return (
            <>    
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
                <button onClick={this.handleSubmit}>Submit</button>
            </>    
        );
    }
}
    
