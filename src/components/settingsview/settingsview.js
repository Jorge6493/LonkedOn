import React from "react";
import './settingsview.css';
import HomeButton from "../homebutton/homebutton";
import Logout from "../logout";
import { Link } from "react-router-dom";

export default class SettingsView extends React.Component {
    render() {
        return(
            <div class="container">
                <div class="row float-right">
                    <Logout/>
                </div>
                <h1 class="ml-5 pt-4">Bolsa de Empleos "Tigre de Web"</h1>
                <br/>
                <div class="input-group col-sm-6">
                    <HomeButton />
                </div>
                <br/>
                <Link to="/editcat">
                    <h3 class="col-sm-6">Edit Categories</h3>
                </Link>                
                <br/>
                <Link to="/editjobs">
                    <h3 class="col-sm-6">Edit Job Postings</h3>
                </Link>                
            </div>
        );
    }
}