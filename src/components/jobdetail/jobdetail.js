import React, { Component } from "react";
import "./jobdetail.css";
import Logout from "../logout";
import Settings from "../settings";
import Postjob from "../postjob";
import HomeButton from "../homebutton/homebutton";

export default class JobDetail extends Component {
    render() {
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
                    <h3>Craigmann Association Inc.</h3>
                    <h5>Miami, Florida, United States of America</h5>
                    <hr/>
                    <h5>Software Developer - Angular</h5>
                    <hr/>
                    <p>Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Tech technology companies, alongside Amazon, Google, Microsoft and Facebook.</p>
                    <br/>
                    <h5>How to apply</h5>
                    <br/>
                    <p>Send your resume at pucmm@tigredeweb.com.do</p>
                </div>
                <div class="col-sm-3">
                    <img alt='hola' src="https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._SY500_.jpg"></img>
                </div>
                </div>
            </div>            
        );
    }
}
