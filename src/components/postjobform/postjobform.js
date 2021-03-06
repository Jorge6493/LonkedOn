﻿import React from "react";
import "./postjobform.css";
import Logout from "../logout";
import Settings from "../settings";
import Postjob from "../postjob/postjob";
import HomeButton from "../homebutton/homebutton";
import JobformPreviewModal from "../jobform-preview-modal"
import axios from "axios";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default class PostJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Design",
      tipo: "fulltime",
      compania: "",
      logo: null,
      email: "",
      url: "",
      position: "",
      location: "",
      desc: "",
      show: false,
        confirmed: false,
        categories: [],
        id: ""
      };
    }

    componentDidMount() {
        this.getCategories();

        if (this.props.match.params.jobId) {
                this.getJob();
            }        
    }

    showModal = (e) => {
        e.preventDefault();
        this.setState({ show: true });
    };

    hideModal = () => {
        if (this.props.match.params.jobId) {
            this.putContent(this);    
            
        }
        else {
            this.postContent(this);
            this.setState({
                show: false,
                category: "Design",
                tipo: "fulltime",
                compania: "",
                logo: null,
                email: "",
                url: "",
                position: "",
                location: "",
                desc: ""
            });
        }    
        // alert("Tu posición ha sido Posteada!");

  };

  postContent() {
    axios.post("http://localhost:3500/jobs", {
      location: this.state.location,
      position: this.state.position,
      company: this.state.compania,
      type_of_job: this.state.tipo,
      category: this.state.category,
      logo: this.state.logo,
      url: this.state.url,
      description: this.state.desc,
      email: this.state.email,
    }).then(resp => {
        alert("Tu posición ha sido posteada!");
    }); 
    };

    putContent() {
        axios.put("http://localhost:3500/jobs/" + this.state.id, {
            location: this.state.location,
            position: this.state.position,
            company: this.state.compania,
            type_of_job: this.state.tipo,
            category: this.state.category,
            logo: this.state.logo,
            url: this.state.url,
            description: this.state.desc,
            email: this.state.email
        }).then(resp => {
            this.componentDidMount();
        });
    };

    getCategories() {
        axios.get("http://localhost:3500/categories").then(resp => {
            for (var k in resp.data) {
                this.state.categories.push(resp.data[k]["category"]);
            }
            console.log(this.state.categories);
            var select = document.getElementById("categoria");

            for (var i = 0; i < this.state.categories.length; i++) {
                var opt = this.state.categories[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }
        });        
    };

    getJob() {
        axios.get("http://localhost:3500/jobs/" + this.props.match.params.jobId).then(resp => {
            console.log(resp.data);
            this.setState({
                show: false,
                category: resp.data["category"],
                tipo: resp.data["type_of_job"],
                compania: resp.data["company"],
                logo: null,
                email: resp.data["email"],
                url: resp.data["url"],
                position: resp.data["position"],
                location: resp.data["location"],
                desc: resp.data["description"],
                id: resp.data["_id"]
            });
        })
    }

  handleChange = (event, fieldName) => {
    if(fieldName==="logo"){
      var nameString = event.target.value;
    var filename = nameString.split("\\").pop();
    this.setState({ [fieldName]: filename });
    // console.log(this.state)

    }
    else {
      this.setState({ [fieldName]: event.target.value });
    }  
    };

    handleClose = () => this.setState({ show: false });

  render() {

    const show = this.state.show;

    const modal = (
        <div>
            <Modal show={show} onHide={this.handleClose} animation={true} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body> <JobformPreviewModal data={this.state}/> </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.hideModal}>
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    );

    return (
      <div class="container">
            {modal}
            <div class="col-lg-12 mainthing">
                <div class="row float-right mr-2 buttons">
                    <Logout />
                    
                </div>
                <h1 class="ml-5 pt-4 title"> Bolsa de Empleos "Tigre de Web"</h1>
                <hr />
                <div class="button row">
                    <div class="col-sm-6">
                        <HomeButton />
                    </div>
                    
                </div>
                <div class="col-lg-9 form-prepare">
                    <form id="leform" class="col-md-6" onSubmit={this.showModal}>
                        <div class="form-group">
                            <label for="categoria">Category</label>
                            <select
                                for="categoria"
                                class="form-control"
                                id="categoria"
                                value={this.state.category}
                                onChange={(event) => this.handleChange(event, "category")}
                                required
                            >
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="tipo">Type</label>
                            <select
                                for="categoria"
                                class="form-control"
                                id="tipo"
                                value={this.state.tipo}
                                onChange={(event) => this.handleChange(event, "tipo")}
                                required
                            >
                                <option value="fulltime" selected>Full Time</option>
                                <option value="parttime">Part Time</option>
                                <option value="freelancer">Freelancer</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="compania">Company</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter company name"
                                id="compania"
                                value={this.state.compania}
                                onChange={(event) => this.handleChange(event, "compania")}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="logo">Logo</label>
                            <input
                                type="file"
                                class="form-control"
                                id="logo"
                                //onChange={(event) => this.handleLogo(event)}
                                onChange={(event) => this.handleChange(event, "logo")}


                            />
                        </div>
                        <div class="form-group">
                            <label for="email">Contact Email</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter contact email address"
                                id="email"
                                value={this.state.email}
                                onChange={(event) => this.handleChange(event, "email")}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="url">URL</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter company webpage"
                                id="url"
                                value={this.state.url}
                                onChange={(event) => this.handleChange(event, "url")}
                            />
                        </div>
                        <div class="form-group">
                            <label for="position">Position</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter available position"
                                id="position"
                                value={this.state.position}
                                onChange={(event) => this.handleChange(event, "position")}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="location">Location</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter company location"
                                id="location"
                                value={this.state.location}
                                onChange={(event) => this.handleChange(event, "location")}
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea
                                id="desc"
                                class="form-control"
                                placeholder="Enter job description"
                                rows="4"
                                value={this.state.desc}
                                onChange={(event) => this.handleChange(event, "desc")}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" class="btn btn-secondary"> Submit </button>
                    </form>
                </div>
                
            </div>
       

        
        
        
        
            
      </div>
    );
  }
}
